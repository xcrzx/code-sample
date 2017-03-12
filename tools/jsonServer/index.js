const jsonServer = require('json-server')

const appRoutes = require('./appRoutes')

const appServer = jsonServer.create()
const middlewares = jsonServer.defaults()

const prepareRoutes = (server, routes, port) => {
  server.use(middlewares)
  server.use(jsonServer.bodyParser)
  server.use(jsonServer.rewriter({
    '/api/': '/',
  }))
  routes(server)
  server.listen(port, () => console.log(`JSON server start at ${port}`))
}

prepareRoutes(appServer, appRoutes, 9001)
