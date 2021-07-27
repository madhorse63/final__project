var patchBtn1 = document.querySelector('#Shadowlands');
var patchBtn2 = document.querySelector('#Battle');
var patchBtn3 = document.querySelector('#Legion');

patchBtn1.onclick = function(){
    filterPatch("Shadowlands");
}

patchBtn2.onclick = function(){
    filterPatch("Battle");
}

patchBtn3.onclick = function(){
    filterPatch("Legion");
}
function filterPatch(triggerSelector){
    var allPatches = document.querySelectorAll('.produsts-item');

    for(var i = 0; i < allPatches.length; i++){
        if(allPatches[i].classList.contains(triggerSelector)){
            allPatches[i].style.display = 'block';
        } else{
            allPatches[i].style.display = 'none';
        }
    }
}
