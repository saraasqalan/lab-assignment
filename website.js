var website = prompt("which web site you Preferred start class with it ?");
while (website !=='wix' && website !=='w3schools' && website !=='udemy'){
    website = prompt("which web site you Preferred start class with it ?");
}
alert ("ok");

var CourseNo = prompt("how many course you want take ?");
alert("ok");
var number = '';



var course = '';
if (website === 'wix') {
  course = '<img src="image/wix.png"/ >' ;
} 
else if (website === 'udemy') {
  course = '<img src="image/udemy.png"/>';
}
 else if (website === 'w3schools') {
    course = '<img src="image/w3schools.png"/>';
  }
  
  for (var i = 0; i < CourseNo; i++) {
    number = number + CourseNo;}



var CourseDetails ;
if(CourseNo =1){
    CourseDetails="no Discount";
}
else if (CourseNo >1 && CourseNo <3){
    CourseDetails="congratulation you have 25% Discount";
}
else if (CourseNo >3 && CourseNo <5){
    CourseDetails="congratulation you have 50% Discount";
}
else{
CourseDetails="congratulation you have 50% Discount and 1 more course for free !!";}
document.write(CourseDetails);
document.write(course);
document.write(number);