import app from "./app";
//now the entry point of our application is server.ts not app.ts
app.listen(5000,()=>{
    console.log(`server is running on port:5000`);
})
