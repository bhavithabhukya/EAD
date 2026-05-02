const express=require("express");
const app=express();
app.use(express.json());
let students=[
    {
        id:1,name:"Babbi"},
         {id:2,name:"nani"
    }
];
app.get("/",(req,res)=>
{
    res.send(`
        <h1>Home Page</h1>
        <a href="/students">View Students</a>
        <br>
        <a href="/contact"></a>
    `);
});
app.get("/contact",(req,res)=>
{
    res.send(`
        <h1>Contact Page</h1>
        <p>Name:Bhavitha</p>
        <a href="/">Home</a>
    `);
});
app.get("/students",(req,res)=>
{
    res.json(students);
});
app.post("/students",(req,res)=>
{
    students.push(req.body);
    res.json({msg:"student added"});
});
app.put("/students/:id",(req,res)=>
{
    students=students.filter(s=>
    s.id!=req.params.id
    );
    res.json({msg:"student deleted"});
});
app.listen(5000,()=>
{
    console.log("server is running at http://localhost:5000");

});