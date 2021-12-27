const prerender = require("prerender")

const server = prerender({
    port: 6002
})

server.use(prerender.removeScriptTags())
server.start()