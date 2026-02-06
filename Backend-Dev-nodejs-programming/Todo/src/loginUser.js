import fs from "fs"
function loginUser(name, email, password) {
    console.log(name)
    try {
        let user = [];
        let obj = {
            id: new Date(), name, email, password, todo: [],
        }
        if (fs.existsSync("todo.json")) {
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"))
            let isUser = data.find((value) => (value.name === name) && (value.email === email))
            if (isUser) {
                console.log("user login")
                return  isUser
            }
            else{
                console.log("login fail")
                return false
            }
        }
        
            } catch (error) {
                console.log(error);
            }
        } export default loginUser
