const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
router.render = (req, res) => {
    var obj = {}
    obj["data"] = res.locals.data.elements
    obj["totalObjectCount"] = res.locals.data.metadata.totalObjectCount
    res.jsonp(obj)
}

server.use(router)
server.listen(3004, () => {
    console.log('JSON Server is running')
})