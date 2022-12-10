const OngModel = require('../Models/ONGsModels')

class OngController {
   async store(req, res){
      const {title, description, category, email} = req.body
      const ongExists = await OngModel.findOne({title})

      if(!title || !description || !category || !email) return res.status(400).json({message: "Some fields are empty!"})
      if(ongExists) return res.status(400).json({message: "ONG already exists!"})

      const createdOng = await OngModel.create(req.body)
      
      return res.status(200).json(createdOng)
   }

   async showAll(req, res){
      const ongs = await OngModel.find()
      return res.status(200).json(ongs)
   }
   
   async showById(req, res){
      try {
         const { index } = req.params
         const ong = await OngModel.findById(index)
         return res.status(200).json(ong)
      } catch (error) {
         return res.status(404).json({ message: "Error finding ONG!"})      
      }
    }

    async update(req, res){
      try {
         const {index} = req.params
         const {title, description, category, email} = req.body
         const ongExists = await OngModel.findOne({title})
         if(ongExists) return res.status(400).json({message: "ONG already exists!"})
         if(!title || !description || !category || !email) return res.status(400).json({message: "Some fields are empty!"})
         await OngModel.findByIdAndUpdate(index, req.body)
         return res.status(200).json({ message: "ONG updated!" })
      } catch (error) {
         return res.status(404).json({ message: "Error Updating ONGS!"})     
      }
    }

    async destroy(req, res){
      try { const { index } = req.params
         const ongDeleted = await OngModel.findByIdAndDelete(index)
         if (!ongDeleted) return res.status(404).json({message: "ONG does not exist"})
         return res.status(200).json({message:"ONG deleted}"})
      } catch (error) {
         return res.status(404).json({ message: "Failed to delete ONG!"})   
     }  
   }
}

module.exports = new OngController()