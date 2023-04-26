document.getElementById("btn34").onclick = function(){
    let days;
    let one = document.getElementsByClassName("dayone");

    if(document.getElementById("1day").checked){
        document.getElementById("textbox-day").innerHTML = "day 1 plan";

    }
    else if(document.getElementById("2day").checked){
        document.getElementById("textbox-day").innerHTML = "day 2 plan";

    }
    else if(document.getElementById("3day").checked){
        document.getElementById("textbox-day").innerHTML = "day 3 plan";

    }
    else if(document.getElementById("4day").checked){
        document.getElementById("textbox-day").innerHTML = "day 4 plan";

    }
    else{
        document.getElementById("textbox-day").innerHTML = "select the number of days";
    }


}
