var input=document.getElementById('question');
var res=document.getElementById('result');
let questions=['Why frontend','what is reat js','why java','what is html','what is css']

function check(){
    if(input.value=="" || input.value==null){
        alert("Input is not given");
        return false;
    }
for(i=0;i<questions.length;i++){
    if(input.value==questions[i]){
        return accept();
    }
}
return decline();
}

function accept(){
    var para=document.createElement('p');
    para.textContent=input.value;
    res.appendChild(para);
    input.value="";
}

function decline(){
    if(input.value=="" || input.value==null){
        alert("Input is not given");
        return false;
    }
    else{
    input.value="";
    }
}