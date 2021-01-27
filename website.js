var WebSite = prompt("which web site you Preferred start class with it ?");
var reson = prompt("why you prefer this website ?");
var CourseNo = prompt("how many course you want take ?");

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
confirm("thank you for using our website ");
alert("Bye Bye")
