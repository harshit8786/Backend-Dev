import fs from "fs";

function BorrowRecord(memberid,bookid,quantity){

    let borrowRecord = [];
    let obj={
        borrowid :new Date(),
        memberid,bookid,quantity
    }
    try{
        if(fs.existsSync("book.json") && fs.existsSync("member.json")){
            let book = JSON.parse(fs.readFileSync("book.json","utf-8"));
            let member = JSON.parse(fs.readFileSync("member.json","utf-8"));
            let bookPrice = book.find((value)=> value.bookid === bookid);
            let memberType = member.find((value)=> value.memberid === memberid);
            
            if(fs.existsSync("borrow.json")){
                let data =JSON.parse( fs.readFileSync("borrow.json","utf-8"));
                if(data){
                    borrowRecord = data;
                }
               
            }
             borrowRecord.push(obj);
                fs.writeFileSync("borrow.json",JSON.stringify(borrowRecord,null,2));
            if(memberType.membershipType==="gold"){
                let res = bookPrice.price*quantity;
                res = Math.ceil((res*15)/100);
                return res;

            }
            else{
                let res = bookPrice.price*quantity;
                res = Math.ceil((res*5)/100);
                return res;
            }
        }
    }
    catch(err){
        console.log(err);
    }
}
export default BorrowRecord;