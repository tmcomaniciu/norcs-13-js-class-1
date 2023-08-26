console.log("hello from actiivt.js")

//This is where you can play with the examples from https://digitalskills.instructure.com/courses/10576/pages/activity-code-review-js-1-primitive-types-and-objects?module_item_id=1426794
// feel free to copy paste them or practice other examples to understand what I showed in my presentation

let empty = [] // An array with no elements
let numbers = [2, 3, 5, 7, 11]  // An array with 5 numeric elements
let various = [ 1.1, true, "a"] // 3 elements of various types

let a = []           // Start with an empty array
a.push("zero")       // Add a value at the end.  a = ["zero"]
a.push("one", "two") // Add two more values.  a = ["zero", "one", "two"]

//Issue 1
let products = 92 + 8 
console.log("Issue 1", products)

//Issue 2
let millimeters = 5 
let centimeters = 10
let totalBitSize = Number(millimeters) + Number(centimeters);
console.log("Issue 2", totalBitSize)                  

//Issue 3
let partNumber = "15"
let yearMade = "2000"
let idNumber =  String(partNumber) + String(yearMade)
console.log("Issue 3", idNumber)                     

//Issue 4
let count
let drillBits = ["standard", "premium,", "select", "special"]        
count = drillBits.length
console.log("Issue 4", count)

//Issue 5
let colorOptions = ["blue", "yellow", "white", "green"]                        
let colorChoice = colorOptions[1]
console.log("Issue 5", colorChoice)

//

//Dinner Menu
let meats = [];
meats.push("Chicken");
meats.push("Burgers");
meats.push("Steak");
meats.push("New York Strip");
meats.push("Rib Eye");
meats.push("Pasta");  

// create an array of 4 vegetables
let vegetables = [];
vegetables.push("Greens");
vegetables.push("Brocolli");
vegetables.push("Asparagus");
vegetables.push("Spinach");

//create an array of 5 desserts
let desserts =[];
desserts.push("Apple Pie");
desserts.push("Pecan Pie");
desserts.push("Carrot Cake");
desserts.push("Chocolate Cake");
desserts.push("Peanut Butter Cake");

// remove the last element in the meats array
meats.pop(); //Removes "Lamb Chops";

// remove the last element in the meats array
vegetables.pop(); // removes "Spinach"

// assign a dessert
let dessert = desserts[3]; 

// Combine the arrays
var mondayMenu = meats.concat(vegetables);

//Add dessert to the mondayMenu;
mondayMenu.push(dessert); // "Chocolate Cake";

console.log("Mondays Menu: " + mondayMenu); //output Mondays Menu!
