//1 :import the json server we installed
const jsonServer = require('json-server')

//2 : create a server application
const restServer = jsonServer.create()

//3 : setup path for db.json
const router = jsonServer.router('db.json')

//4 : return a middleware instance used by json-servere
const middleware = jsonServer.defaults()
//middlewares are used inbetween to check the request,response

//5 : setup port for db.json
const port = 3001

//use in server
restServer.use(middleware)
restServer.use(router)

//run the server (restServer)
restServer.listen(port,()=>{
    console.log("rest server listening on the port" +port);
})