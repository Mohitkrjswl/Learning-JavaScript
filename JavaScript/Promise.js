const { log } = require("console");
const fs= require("fs")

function readAndThenWriteToFile(cb){
    fs.readFile("a1.txt", "utf-8", function(err, data){
        data = data + "Namaste Dev";
        fs.writeFile("a.txt", function(){
            cb(); 
        })

    });
}
readAndThenWriteToFile(function() {
    console.log("content added")

})