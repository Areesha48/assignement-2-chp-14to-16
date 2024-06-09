//question 1//
let studententsNames = [];

//question 2//
let studententsnames = new Array();

//question 3//
let  myArray = ["bushra1", "areesha2" ,"zainab"];

//question 4//
let numbersArray = [1,2,3,4,5];

//question 5//
let  booleanArray = [ true ,false , true ,false];

//question 6//
let mixedArray = ["bushra" , true , 123 ,"iqra" ,false];

//question 7//
let qualifications = [" SSC","HSC" ," BCS" ,"BS" ,"BCOM" ,"MS" ,"M. Phil." ,"PhD"];
for (let i = 0 ; i< qualifications.length; i++){
    document.write(qualifications[i] +"<br>")
};

//question 8//
let studententsname = ["Micheal" , "john" ,"tony"];
let studentscores = [320,480 ,380];
let totalmarks = 500;

for(let i = 0; i< studententsname.length;i++){
    let name =studententsname[i];
    let score = studentscores[i];
    let percentage = (score / totalmarks)*100;
    document.write("student:" + name + "<br>");
    document.write("score :" + score  + "<br>");
    document.write("percentage :" + percentage + "%" +"<br>");
    
}

// question 9//
// Initialize an array with color names
let colors = ["Red", "Green", "Blue", "Yellow", "Orange"];

// Display the array elements in the browser
document.write("Original Array: " + colors + "<br>");

// Ask the user what color he/she wants to add to the beginning
let newColor = prompt("Enter a color to add to the beginning: ");

// Add the new color to the beginning of the array
colors.unshift(colors);

// Display the updated array in the browser
document.write("Updated Array:  " + colors + "<br>");

//b//
// Ask the user what color he/she wants to add to the end//
let seconddcolor = prompt("Enter a color to add to the end: " + "<br>");

// Add the new color to the end of the array
colors.push(colors);

// Display the updated array in the browser
document.write("Updated Array: " + colors +"<br>");


//c//

colors.unshift("black","white");
// Display the array elements in the browser
document.write("ubdated Array: " + colors + "<br>");

//d//
colors.shift();
// Display the array elements in the browser
document.write("ubdated Array: " + colors + "<br>");

//e//
colors.pop();
// Display the array elements in the browser
document.write("ubdated Array: " + colors + "<br>");

//f//
let indextoadd = parseInt(prompt('Enter the index to add a color') , 10);
let colortoadd = prompt('Enter the color to add');
colors.splice(indextoadd,0,colortoadd);
document.write("ubdated Array :" + colors + "<br>");

//g//
let indextodelete = parseInt(prompt('Enter the index to delete a color') ,10);
let colortodelete = prompt('Enter the color  to delete');
colors.splice(indextodelete,0,colortodelete);
document.write("ubdated Array :" + colors + "<br>");

//question 10//

let scores = [88, 92, 78, 95, 82, 89, 76, 91, 85, 90];
document.write("Score Of Students\n :" + scores + "<br>");
document.write("Ordered Scores Of Students\n :");
scores.sort((a, b) => a - b);
document.write(scores + "<br>");

//question 11//
let cities = ["karachi ", "lahore" ,"islamabad" ,"peshawar" ,"Queeta"];
document.write("<b>cities list</b> :"+ "<br>"     + cities + "<br>");
let selectedCities =["karachi", "lahore"];
document.write("<b>Selected cities</b> :" + "<br>" +selectedCities + "<br>");

//question 12//
let arr = ["This ", " is ", " my ", " cat"];
let str = arr.join("<b>This is my cat</b>" + "<br>");
document.write("Array" + arr  +"<br>");

document.write("string" + "This is my cat" + "<br>");

//question 13//
let fifo = ["Devices :"+"<br>" + "keyboard " ,"mouse" ,"printer" ,"monitor"];
document.write(fifo)
fifo[0] = "keyboard";
fifo[1] = "mouse";
fifo[2] = "printer";
fifo[3] = "monitor";

document.write( "output"  +"<br>"  + fifo[0]  + "<br>");
document.write( "output"  +"<br>" +  fifo[1]  +  "<br>");
document.write( "output" +"<br>"   + fifo[2]    + "<br>"); 
document.write( "output" +"<br>"  +   fifo[3]   +  "<br>");

//question 14//
let fine = ["Devices :"+"<br>" + "keyboard " ,"mouse" ,"printer" ,"monitor"];
document.write(fine)
fine[0] = "keyboard";
fine[1] = "mouse";
fine[2] = "printer";
fine[3] = "monitor";

document.write( "output"  +"<br>"  + fine[0]  + "<br>");
document.write( "output"  +"<br>" +  fine[1]  +  "<br>");
document.write( "output" +"<br>"   + fine[2]    + "<br>"); 
document.write( "output" +"<br>"  +   fine[3]   +  "<br>");


// question 15 //
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

      document.write("<select>");
      document.write("<option>Select a manufacturer</option>");
      for (let i = 0; i < manufacturers.length; i++) {
        document.write("<option>" + manufacturers[i] + "</option>");
      }
      document.write("</select>");
