const exp = require("express");
const app = exp();
const port = 3000;
app.use(exp.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/login">Login</a>
        `);
});
app.get("/login",(req,res)=>{
    res.send(`
        <h1>Login page</h1>
        <form method="post" action="/login">
            <label for="">UserName:</label>
            <input type="text" name="username" required>
            <br>
            <label for="">Password:</label>
            <input type="password" name="password" required>
            <br>
            <button type="submit">Login</button>
        </form>
        `);
});
app.get("/about", (req, res) => {
    res.send("About us");
});

app.get("/contact", (req, res) => {
    res.send("Contact us");
});
app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    res.send(`
       <h3>Login succesfull</h3>
       <p>Username:${username}</p>
       <p>Password:${password}</p> 
        `);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
