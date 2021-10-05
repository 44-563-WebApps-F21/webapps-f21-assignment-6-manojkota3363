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