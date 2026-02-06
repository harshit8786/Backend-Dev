import fs from "fs"
function member(name, membershipType) {
    try {
        let user = [];
        let obj = {
            memberid: new Date(), name, membershipType
        }
        if (fs.existsSync("member.json")) {
            let data = JSON.parse(fs.readFileSync("member.json", "utf-8"))
            let isUser = data.some((value) => value.name === name)
            if (isUser) {
                return "member already exit"
            }
            user = data

        }

        user.push(obj)
        fs.writeFileSync("member.json", JSON.stringify(user, null, 2))
        console.log("user crete")
    } catch (error) {
        console.log(error);
    }
} export default member