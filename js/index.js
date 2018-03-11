var count = 0;
var isgo = false;
var timer;
window.onload = function(){
  var ul_img = document.getElementsByClassName("ul_img")[0];
  var li_img = document.getElementsByClassName("li_img");
  var buttom_btn = document.getElementsByClassName("buttom_btn");
  buttom_btn[0].style.backgroundColor ="white";
  showtime();
  function showtime(){
    timer = setInterval(function(){
      if(isgo == false){
        count++;
        ul_img.style.transform = "translate(" + -1365 * count + "px)";
        if (count >= li_img.length - 1) {
            count = li_img.length - 1;
            isgo = true;
        }
    }
    else {
      count--;
      ul_img.style.transform = "translate(" + -1365 * count + "px)"
      if(count<=0){
      count = 0;
      isgo =false;
      }
    }
    for (var j = 0; j < buttom_btn.length; j++) {
          buttom_btn[j].style.backgroundColor = "transparent";
       }
          buttom_btn[count].style.backgroundColor = "white";
  },3000)
  }
  for(var a = 0; a < li_img.length; a++){
      buttom_btn[a].index = a;
      buttom_btn[a].onmouseover = function(){
      clearInterval(timer);
      for (var i = 0; i < buttom_btn.length; i++) {
        buttom_btn[i].style.backgroundColor = "transparent";
      }
        buttom_btn[this.index].style.backgroundColor = "white";
        if (this.index == 2) {
          isgo == true;
        }
        if(this.index == 0) {
          isgo == false;
        }
       count = this.index;
       ul_img.style.transform = "translate(" + this.index * -1365+ "px)"
       count = this.index;
       buttom_btn[count].style.backgroundColor = "white";
    }
    buttom_btn[a].onmouseout= function(){
      showtime();

    }
  }
}
