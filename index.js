const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.get('/odd-even', async function (request, reply) {
    const number = request.query['number']
    const oddEven = number % 2 == 0 ? 'even': 'odd'
    return {number: oddEven}
  })

  // Run the server!
  fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })