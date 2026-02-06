import fs from "fs"
function createTodo(name, task){
    try{
        let obj = {
            id : new Date(),
            createTime : new Date(),
            task, status:false
        }
        if(fs.existsSync("todo.json")){
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"))
            for(let i=0; i<data.length && data.length>0; i++){
                if(data[i].name===name && data.length>0){
                    data[i].todo.push(obj)
                }
            }
            fs.writeFileSync("todo.json", JSON.stringify(data, null, 2))
        }
    }
    catch(error){
        console.log(error)
    }
}export default createTodo
       