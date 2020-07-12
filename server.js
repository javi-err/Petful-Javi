  
const { PORT } = require('./config')
const app = require('./modules/app/app')


app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${ PORT }.`)
})