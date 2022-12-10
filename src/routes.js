const { Router } = require('express')
const OngController = require('./Controllers/OngController')
const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).json({message: "Server Working"})
})

// Create
routes.post('/ongs', OngController.store)
// ShowById
routes.get('/ongs/:index', OngController.showById)
// Show All
routes.get('/ongs', OngController.showAll)
// UpdateById
routes.put('/ongs/:index', OngController.update)
// Destroy
routes.delete('/ongs/:index', OngController.destroy)

module.exports = routes