import express from 'express'
import router from './routes'
import cors from 'cors'
import { config } from 'dotenv'
import { messages } from './resources'

// Sets up cross env settings
config()
const app = express()
const port = process.env.PORT || 5059 // not an actual enviroment variable, set up by dotenv library

// Middlewares
app.use(cors())
app.use(router)

const runningServer = startServer()

function startServer () {
  const server = app.listen(port, err => {
    if (err) {
      console.error(err)
      return
    }
    console.info(messages.ServerRunning.replace('{port}', port || ''))
  }
  )
  // Do cleanup after closing
  server.on('close', err => {
    if (err) {
      console.error(messages.ShutingDownError.replace('{error}', err || ''))
    }
    console.info(messages.ShutingDown)
  })
  return server
}

// Event handler in case user requests a shutdown of the server
const shutdown = (evt) => {
  console.info(messages.SignalRecieved.replace('{evt}', evt || ''))
  runningServer.close(() => {
    console.info(messages.ClosedConnection)
    process.exit(0)
  })
}
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
process.on('exit', shutdown)

export default app
