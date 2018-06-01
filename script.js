function getId(redact){
    return document.getElementById(redact);
    
}
function getId(style){
    return document.getElementById(style);
    
}
function getId(thirdBlock){
    return document.getElementById(thirdBlock);
    
}
function getId(firstBlock){
    return document.getElementById(firstBlock);
    
}
function getId(code){
    return document.getElementById(code);
    
}
function getId(add){
    return document.getElementById(add);
    
}
getId('redact').onclick = function(){
    getId('thirdBlock').style.display = 'block';
   
}
getId('add').onclick = function(){
    getId('firstBlock').innerHTML;
   
}






getId('box').onclick = function(){
    getId('box').style.left = '200px' ;
    getId('box').style.top = '200px' ;
    getClass('text', 0).style.border = '1px solid black';
}
