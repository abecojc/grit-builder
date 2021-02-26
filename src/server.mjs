import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.get("/", (req,res) => res.send({Profile : "Grit app for high school and college students to set long term goals and increase their grit."}))

app.get("/about",(req,res) => res.send({about: "Our motivation"}))

app.get("/test", ( req, res) => res.send({test: "grit questionnaire"}))

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`))