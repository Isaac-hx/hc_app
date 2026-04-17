import { createServer } from "http";

import next from "next";

import { parse } from "url";


const port = 3005
const dev = "production"
const app =next({dev})
const handle = app.getRequestHandler()
app.prepare().then(()=>{
    createServer((req,res)=>{
        const parsedUrl = parse(req.url,true)
        handle(req,res,parsedUrl)
    }).listen(port,(err)=>{
        if(err)throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
})