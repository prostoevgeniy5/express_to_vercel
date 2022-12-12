import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

const db = {
    courses:[
    {id: 1, title: 'front-end'},
    {id: 2, title: 'back-end'},
    {id: 3, title: 'react'}
  ]
}

app.get('/', (req: Request, res: Response) => {
  res.send({message:'Hello Samurai'})
})

app.get('/courses', (req: Request, res: Response) => {
  
  res.json(db.courses)
})

app.get('/courses/:id', (req: Request, res: Response) => {
  const course = db.courses.find(c => c.id === +req.params.id)

  if(!course) {
    res.sendStatus(404)

    return
  }
  res.json(course)
})


const startApp = async () => {
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

startApp()
