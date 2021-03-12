// @flow
import express from 'express'
import Prisma from '@prisma/client'

const app = express()
const {PrismaClient} = Prisma

const prisma = new PrismaClient()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.get("/projects", async (req, res) => {
    const allProjects = await prisma.project.findMany()
        console.log(allProjects)
        res.send({allProjects})
     res.status(200).json({allProjects})
})

app.get("/job", async (req, res) => {
    const job = await prisma.project.findMany({
        where: {name: "job"}
    })

    console.log(job)
    res.send({job})

    // if (job.length === 0){
    //     res.status(404).json({"message": "No job found"})
    // }else{
    //     res.status(200).json({job})
    // }
})

app.get("/", (req, res) => res.send({Profile : "Grit app for high school and college students to set long term goals and increase their grit."}))

app.get("/about",(req, res) => res.send({about: "This app was created with the intent to help college students grow their grit and achieve their long term goals."}))

app.get("/test", ( req, res) => res.send({test: "grit questionnaire"}))

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`))