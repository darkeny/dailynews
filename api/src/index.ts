
import "module-alias/register"
import express from 'express'
import { router } from '^routers'
import cors from 'cors'

const app = express()

app.use(router)
app.use(express)
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(3000, () => {
    console.log("Server Running at port 3000...");
})
