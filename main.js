var correct = 0;
    var wrong = 0;

    function processphrase(){
        qw = document.getElementById("phrase").value
        er = document.getElementById("phrase_text").value
        res = document.getElementById("result")
        if(qw == er){
         correct+=1;
         alert("Access allowed");
        res.innerHTML = "RIGHT - "+correct;
        }
        else{
        wrong+=1;
        alert("Access denied");
         res.innerHTML ="WRONG - "+ wrong;
    }
 } 
 var i=1;
 function newImage(){
     switch(i){
         case 1:
             document.getElementById("img1").src="Newt.jpg";
             break;
        case 2:
            document.getElementById("img1").src="Aardvark.jpg";
            break;
        case 3:
            document.getElementById("img1").src="Magpie.jpg";
            break;

     }
     i=i+1;
 }  
 function power(){
    b=document.getElementById("form1_base").value;
    e=document.getElementById("form1_exponent").value;
   output=document.getElementById("result1");
    result="";
    var c=b;
    for(i=1;i<=e;i++){
        c=c**i;
        result=result+" "+c;
 }
 output.innerHTML = "powers are"+result;
}
function plus1(){
    b=document.getElementById("form1_base").value;
    e=document.getElementById("form1_exponent").value;
    output1=document.getElementById("result2");
   var  r=b+e;
    output1.innerHTML =r;


}
function minus(){
    b=document.getElementById("form1_base").value;
    e=document.getElementById("form1_exponent").value;
    output1=document.getElementById("result2");
   let  r=b-e;
    output1.innerHTML =r;


}
function times(){
    b=document.getElementById("form1_base").value;
    e=document.getElementById("form1_exponent").value;
    output1=document.getElementById("result2");
   let  r=b*e;
    output1.innerHTML =r;


}
function divide(){
    b=document.getElementById("form1_base").value;
    e=document.getElementById("form1_exponent").value;
    output1=document.getElementById("result2");
   let  r=b/e;
    output1.innerHTML =r;


}