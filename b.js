const http=require('http');
const server=http.createServer((req,res)=>
{
    res.writeHeader(200,{'Content-Type':'text/html'});
    if(req.url==='/')
    {
       res.write(`

        <html>
            <head>
                <title>
                    Home
                </title>
                
            </head>
            <body>
                <h1>Home Page</h1>
                <p>WELCOME TO HOME PAGE</p>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </body>
        </html>
        `) ;
    }
    else if(req.url==='/about')
    {
        res.write(`
          <html>
            <head>
                <title>
                    About
                </title>
            </head>
            <body>
                <h1>About Page</h1>
                <p>This is the about About Page </p>
                <a href="/">Home</a>
                
            </body>
          </html>
        `);
    }
    else if(req.url==='/contact')
    {
        res.write(`
            <html>
                <head>
                    <title>
                        Contact
                    </title>
                </head>
                <body>
                 <h1>Contact Page</h1>   
<p>Email:bhukyabhavitha14@gmail.com</p>
<a href="/">Home</a>
                </body>
            </html>
            `);
    }
    else{
        res.write(`
            <
        <html>
            <head>
               
            </head>
            <body>Page Not FOund</body>
        </html>`)
    }
  
    res.end()
}); 
server.listen(3000,()=>
{
    console.log("server running at http://localhost:3000");
});    
     
        