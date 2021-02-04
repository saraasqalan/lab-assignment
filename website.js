var website; 
function getWebsite() {
website = prompt("which web site you Preferred start class with it ?");
while (website !=='wix' && website !=='w3schools' && website !=='udemy'){
    website = prompt("which web site you Preferred start class with it ?");
}}
getWebsite();
alert ("ok");

var CourseNo ;
function getCourseNo(){
CourseNo = prompt("how many course you want take ?");}
getCourseNo();
alert("ok");

function getName() {
  var userName = prompt('Enter your name?');
  console.log(typeof prompt);
  console.log(userName);
}

  getName();
  alert("Done");



var number = '';
var course = '';
for (var i >= 0; i <= CourseNo; i++) {
  
  

if (website === 'wix') {

  course = '<img src="image/wix.png"/ >' ;
} 
else if (website === 'udemy') {
  course = '<img src="image/udemy.png"/>';
}
 else if (website === 'w3schools') {
    course = '<img src="image/w3schools.png"/>';
    }
    number = number +course ;}
  
document.write(number);
