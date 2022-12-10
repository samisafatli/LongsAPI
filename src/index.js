const app = require('./app')
const Loaders = require('./Loaders')

Loaders.start()
app.listen(3333, () => console.log('Working'))