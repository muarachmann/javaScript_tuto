function change() {
    var color = document.getElementById("colorName").value;
    color = color.toLowerCase();
    div = document.body.getElementsByClassName("clr_change");
    for (var i = 0; i < div.length; i++){
        if (color == "white"){
            div[i].style.color = "black";
            div[i].style.backgroundColor = color;
        }
        else if(color == "black"){
            div[i].style.color = "white";
            div[i].style.backgroundColor = color;
        }
        else {
            div[i].style.color = "black";
            div[i].style.backgroundColor = color;
        }
    }
    if(div[2].style.backgroundColor != color){
        document.getElementById("not").innerHTML = color + " is not valid."
        document.getElementById("not").style.margin = "5px"
    }
    else {
        document.getElementById("not").innerHTML = "";
    }
}