
alert("hello world");
console.log("hello world");


$(document).ready(NewfirstMethod);
$(document).ready(NewFourthMethod);


function NewfirstMethod() {
    $("body").css("opecity", 0.5);
    //$("body").css("background", "red");
    NewSecondMethod();
}

function NewSecondMethod() {
    $(".chunnilal").css("background", "rgba(255, 99, 71, 0.5)");
    //alert($(".chunnilal").siblings());
    NewthirdMethod();
}
function NewthirdMethod() {
    $("#cheetarMohan").css("background", "rgba(255, 99, 71, 0.5)");
}

function NewFourthMethod() {
    $(".table-form1").css("align", "center");
    $(".table-form1").css("background-color", "dodgerblue");
    $(".table-form1").css("opecity", 0.5);
}
