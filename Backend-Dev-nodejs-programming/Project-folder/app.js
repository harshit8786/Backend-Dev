const fs =require("fs");
fs.readFile("input.txt", "utf8" , (err ,data)=>{
    let words =data.split(" ");
    fs.writeFile("output.txt", words.length.toString(), ()=>{
    console.log("output")
    });
});