import fs from "fs"
function book( title, author, price) {
    try {
        let user = [];
        let obj = {
            bookid: new Date(), title, author, price, book: [],
        }
        if (fs.existsSync("book.json")) {
            let data = JSON.parse(fs.readFileSync("book.json", "utf-8"))
            let isUser = data.some((value) => value.title === title)
            if (isUser) {
                return "book already exit"
            }
            user = data

        }

        user.push(obj)
        fs.writeFileSync("book.json", JSON.stringify(user, null, 2))
        console.log("user crete")
    } catch (error) {
        console.log(error);
    }
} export default book