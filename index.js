const express = require('express')
const app = express()

app.get('/usuario', function (req, res) {
  res.send('Rota ativada com GET e recurso usuario valores de usuario devem ser retornados')
})
app.get('/endereco', function (req, res) {
    res.send('Rua documentação')
  })
app.listen(3000, () => console.log('funcionou'))
