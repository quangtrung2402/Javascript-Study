console.log("Working with files")
var fileManager = require("./fileManager")
const fileName = __dirname + '/../data/temp.txt'
fileManager.createNewFile(fileName)

let jsonObject = {
    "foods": [
        {
            "foodName": "Com",
            "foodDescription": "gao luoc"
        },
        {
            "foodName": "Pho",
            "foodDescription": "My nau voi nuoc dung"
        }
    ],
    "resultCode": 200,
    "restaurantName": "Mon Viet"
}

jsonObject.address = "Hoang Mai, Hanoi";

fileManager.saveJsonObjectToFile(jsonObject, fileName);
fileManager.readJsonObjectFromFile(fileName);
