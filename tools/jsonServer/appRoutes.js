module.exports = (server) => {
  server.get('/todos', (req, res, next) => {
    res.status(200).json({
      entities: {
        1: {
          id: 1,
          title: 'Todo title 1',
          completed: true,
        },
        2: {
          id: 2,
          title: 'Todo title 2',
          completed: false,
        },
        3: {
          id: 3,
          title: 'Todo title 3',
          completed: false,
        },
        4: {
          id: 4,
          title: 'Todo title 4',
          completed: false,
        },
      },
    })
    return next()
  })
}
