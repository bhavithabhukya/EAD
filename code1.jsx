import { useState } from "react";


function CheckPassword()
{
    const [s ,setS] =useState(" ");

const check = (v) =>{
    
    let c=0;
    if(v.length>=8)
        c++;
    if(/[0-9]/.test(v))
        c++;
    if(/[A-B]/.test(v))
        c++;
    if(/[!@#$%^&*]/.test(v))
        c++;
    if(c<=2)
        setS("weak");
    if(c===3)
        setS("medium");
    else 
        setS("strong");
};
return(
    <div style={{textAlign:"center"}}>
        <h2>PASSWORD CHECKER</h2>
        <input type="password"
        onChange={(e)=>
        
        check(e.target.value)
        }
    />
    <p>{s}</p>
    </div>
);
}
export default CheckPassword;

