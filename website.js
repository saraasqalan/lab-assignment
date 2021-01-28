var WebSite = prompt("which web site you Preferred start class with it ?");
<<<<<<< HEAD

while (website !=='wix' && website !=='w3schools' && website !=='udemy'){
    WebSite = prompt("which web site you Preferred start class with it ?");
}
=======
>>>>>>> 01953ea8e95ca7b75c00b5487a8c6bea38fc862f
var reson = prompt("why you prefer this website ?");
var CourseNo = prompt("how many course you want take ?");

var CourseDetails ;
<<<<<<< HEAD
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

var course = '';

if (website === 'wix') {
  course = '<img src="image/wix.png"/>';
} 
else if (website === 'udemy') {
  course = '<img src="image/udemy.png"/>';
}
 else if (website === 'w3schools') {
    course = '<img src="image/w3svools.png"/>';
  }


var CourseNo = prompt('how many course you want take ?');

var result = '';

for (var i = 0; i < CourseNo; i++) {
  result = result + CourseNo;
}

document.write(result);

document.write(CourseDetails);
confirm("thank you for using our website ");
alert("Bye Bye")
=======
if(CourseNo >=1 && CourseNo <3){
    CourseDetails="congratulation you have 25% Discount";
}
 else if (CourseNo >=3 && CourseNo <5){
    CourseDetails="congratulation you have 50% Discount";
}
else if (CourseNo >=5){
    CourseDetails="congratulation you have 50% Discount and 1 more course for free !!";
}
else{
CourseDetails="sorry you write wrong value :)";
}

document.write(CourseDetails);
confirm("thank you for using our website ");
alert("Bye Bye")
>>>>>>> 01953ea8e95ca7b75c00b5487a8c6bea38fc862f
