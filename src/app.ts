'use_strict'

import * as express from 'express'
import cors from 'cors'

function main(): void {
    const server = express.default()
    const PORT = 2002 || process.env.PORT

    server.use(cors())
    server.use(express.default.json())

    server.get("/", async(req: express.Request, res: express.Response) => {
        res.json("Success Hi there!")        
    })

    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

export default main