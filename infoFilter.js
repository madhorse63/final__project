var infoBtn1 = document.querySelector('#Information');
var infoBtn2 = document.querySelector('#reviews');
var infoBtn3 = document.querySelector('#payment');
var infoBtn4 = document.querySelector('#other1');
var infoBtn5 = document.querySelector('#other2');

infoBtn1.onclick = function(){
    filterInfo("Information");
}

infoBtn2.onclick = function(){
    filterInfo("reviews");
}

infoBtn3.onclick = function(){
    filterInfo("payment");
}

infoBtn4.onclick = function(){
    filterInfo("other1");
}

infoBtn5.onclick = function(){
    filterInfo("other2");
}

function filterInfo(triggerSelector){
    var allInfo = document.querySelectorAll('.info-text-main');

    for(var i = 0; i < allInfo.length; i++){
        if(allInfo[i].classList.contains(triggerSelector)){
            allInfo[i].style.display = 'block';
        } else{
            allInfo[i].style.display = 'none';
        }
    }
}