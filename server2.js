const exp=require("express");
const app=exp();
const port=3000;
app.get("/Home",(req,res)=>{
    res.send(`
        <h1>Home</h1>
        <a href="/about">About</a>
        <br>
        <a href="/login">Login </a>
        <a href="/contact">Contact</a>`);
});
app.get("/login",(req,res)=>{
    res.send(`
        <h1>Login Page</h1>
        
        `)
})
app.get("/about",(req,res)=>{
    res.send(`
        <h1>About us</h1>
        <a href="/Home">Home</a>
        <br>
        <a href="/contactUs">Contact</a>
        `);
});
app.get("/contactUs",(req,res)=>{
    res.send(`
        <h1>Contact Us</h1>
        <a href="/Home">Home</a>
        <br>
        <a href="/about">About</a>
        `);
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}/Home`);
    
});