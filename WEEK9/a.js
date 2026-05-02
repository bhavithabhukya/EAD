const fs=require('fs');
const studentData="name:babbi\nroll no:77\ncourse:it";
fs.writeFile('data.txt',studentData,(err)=>
{
    if(err) throw err;
    console.log("file creayed data written successfully");
    fs.readFile('data.txt','utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);
        const newdata="grade:B\n";
        fs.appendFile('data.txt',newdata,(err)=>
        {
            if(err) throw err;
            console.log("data was updated");
            fs.readFile('data.txt','utf8',(err,updatedData)=>
            {
                if(err) throw err;
                console.log(updatedData);
            });
        });

    });
});
