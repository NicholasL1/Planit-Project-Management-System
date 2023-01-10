const express = require('express')
const dotenv = require('dotenv').config()
const { erroHandler, errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 6000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Managament System API' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))