function hamyes(){
    alert("<3");
}
function no(){
    var left= Math.random()*300;//hoặc *innerWidth(chiều ngang màn hình)
    var top=Math.random()*300;// hoặc *innerHeight(chiều cao màn hình)
    document.getElementById("no").style.position = 'relative';//style.position thuộc tính vị trí: relative->có thể di chuyển
    document.getElementById("no").style.left = left+'px';//style.left: vị trí trái
    document.getElementById("no").style.top= top+'px';//style.top: vị trí trên
}

