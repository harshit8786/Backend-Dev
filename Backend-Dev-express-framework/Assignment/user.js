import fs from "fs";

function user(Id, Name, Class){
    try{
         let studentsJson = [];
         let ob = {
            Id, Name, Class
         }
         if(fs.existsSync("student.json"))
            {
            let data = fs.readFileSync("student.json", "utf-8")
            console.log(data);

            if(data){
                studentsJson = JSON.parse(data)
                console.log(data);
            }
         }
            studentsJson.push(ob)
         fs.writeFileSync("student.json", JSON.stringify(studentsJson, null, 2))
         return "student create successful"
         
       
    } catch (error) {
        console.log("Error from create student ", error);
       
    }

}
export default user