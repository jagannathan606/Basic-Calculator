

function row(val){
    
    document.getElementById("screen").value=document.getElementById("screen").value+val
    
   
   

}
function clearbutton(){
    document.getElementById("screen").value=""
}
 
function equalbutton(){

var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result

}

function deletebutton() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}

