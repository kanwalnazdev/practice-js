// // alert( "Hello World" );
// // var name = "ali";
// // alert("Hello " + name);

// // var num=5;
// // var num2=10;
// // var sum=num+num2;
// // alert(sum);



// // var userName = prompt("Enter your name:");
// // var userAge = prompt("Enter your age:");
// // var favNumber = prompt("Enter your favorite number:");


// // var ageNumber = Number(userAge);
// // var favNum = Number(favNumber);


// // {alert("Hello " + userName + 
// //       " Your age is: " + ageNumber + 
// //       "Your favorite number is: " + favNum +
// //       "Next year your age will be: " + (ageNumber + 1));

// // }


// // var userName= prompt("Enter your name:");
// // var currentdate = new Date();
// // var todaydate = currentdate.getDate();
// // var dayNumber = currentdate.getDay();
// // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // var todayDayName = dayNames[dayNumber];
// // var hours = currentdate.getHours();
// //  var greeting;
// // if (hours < 12) {
// //   greeting = "Good morning";
// // }else if( hours>=12 && hours < 18){
// //       greeting = "Good afternoon";
// // }else{ greeting = "Good evening";}
// // alert(greeting + " " + userName + " Today is " + todayDayName + " and the date is " + todaydate);

// // // var myDate=new Date (2024, 11, 31);
// // // console.log(myDate);

// // var now= new Date();
// // var day=now.getDate();
// // var month=now.getMonth();
// // var year=now.getFullYear();

// function marksCalculator() {
// var sub1=+prompt ("Enter marks of english:");
// var sub2=+prompt("Enter marks of math:");
// var sub3=+prompt("Enter marks of science:");

// var total=sub1+sub2+sub3;
// var percentage=(total/300)*100;

// alert("Total Marks: " + total) ;
// alert("Percentage: " + percentage + "%");}
// marksCalculator();

// function quiz() {

//     var q1 = prompt("What is the capital of Pakistan?");
//     if (q1.toLowerCase() === "islamabad") {
//         alert("Q1 Correct! Welldone.");
//     } else {
//         alert("Q1 Wrong answer!");
//     }

//     var q2 = prompt("49+27=?");
//     if (q2 === "76") {
//         alert("Q2 Correct! Welldone.");
//     } else {
//         alert("Q2 Wrong answer!");
//     }

//     var q3 = prompt("What is full form of JS?");
//     if (q3.toLowerCase() === "javascript") {
//         alert("Q3 Correct! Welldone.");
//     } else {
//         alert("Q3 Wrong answer!");
//     }


// quiz();

function marksheet(){

var name = prompt("Enter Student Name");
var className = prompt("Enter Class");
var roll = prompt("Enter Roll Number");

var english = +prompt("Enter  your English Marks out 100");
var urdu = +prompt("Enter your Urdu Marks out of 100");
var math = +prompt("Enter your Math Marks out of 100");
var science = +prompt("Enter your Science Marks out of 100");
var computer = +prompt("Enter your Computer Marks out of 100");

var totalMarks = 500;

var obtained = english + urdu + math + science + computer;

var percentage = (obtained / totalMarks) * 100;

var grade;
var remarks;

if(percentage >= 80){
grade = "A+";
remarks = "Excellent";
}
else if(percentage >= 70){
grade = "A";
remarks = "Very Good";
}
else if(percentage >= 60){
grade = "B";
remarks = "Good";
}
else if(percentage >= 50){
grade = "C";
remarks = "Average";
}
else{
grade = "Fail";
remarks = "Work Hard";
}

document.write("<div class='info'>");
document.write("<h3>Name: " + name + "</h3>");
document.write("<h3>Class: " + className + "</h3>");
document.write("<h3>Roll Number: " + roll + "</h3>");
document.write("</div>");

document.write("<table>");

document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

document.write("<tr><td>English</td><td>100</td><td>"+english+"</td></tr>");
document.write("<tr><td>Urdu</td><td>100</td><td>"+urdu+"</td></tr>");
document.write("<tr><td>Math</td><td>100</td><td>"+math+"</td></tr>");
document.write("<tr><td>Science</td><td>100</td><td>"+science+"</td></tr>");
document.write("<tr><td>Computer</td><td>100</td><td>"+computer+"</td></tr>");

document.write("<tr><th>Total</th><th>"+totalMarks+"</th><th>"+obtained+"</th></tr>");

document.write("<tr><th colspan='3'>Percentage: "+percentage.toFixed(2)+"%</th></tr>");
document.write("<tr><th colspan='3'>Grade: "+grade+"</th></tr>");
document.write("<tr><th colspan='3'>Remarks: "+remarks+"</th></tr>");

document.write("</table>");

}

marksheet();