import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagems de usuarios')

    response.json(['Diego', 'Robson', 'Eduardo', 'Lucas', 'Daniel'])
})

app.listen(3333)