const express =require('express');
const path = require('path');
const app = express();
const PORT=4000;

app.use((req,res,next) =>{
    console.log(`Method:${req.method},URL:${req.url}`);
    next();
});
 app.use(express.static(path.join(__dirname, 'public')));
 app.get('/home',(req,res) =>{
    res.send('<h1>Welcome to HomePage</h1>');
 });
 app.get('/login',(req,res) =>{
    res.send('<h1> LoginPage</h1>');
 });
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

 app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
 });
