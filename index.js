

var arr = document.querySelectorAll("button");
arr.forEach(element => {
    element.addEventListener("click",function(){
        makeSound(this.textContent);
        animation(this.textContent);
    });
});


document.addEventListener("keydown",function (event){
        makeSound(event.key);
        animation(event.key);
    });



  function makeSound(key){
      switch (key) {
          case 'w':
              var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
          break;

          case 'a':
              var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
          break;

          case 's':
              var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
          break;
              
          case 'd':
              var audio = new Audio("sounds/tom-4.mp3");
              audio.play();    
          break;

          case 'j':
              var audio = new Audio("sounds/snare.mp3");
              audio.play();    
          break;

          case 'k':
              var audio = new Audio("sounds/crash.mp3");
              audio.play();    
          break;

          case 'l':
              var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();    
          break;
      
          default:
          break;
      }
  }


  function animation(key){
      document.querySelector().classList.add("pressed");
      setTimeout(() => {
         document.querySelector("."+key).classList.remove("pressed"); 
      }, 100);
  }


// var arr = document.querySelectorAll("button");
// for(var i = 0 ; i < arr.length ; i ++){
//     arr[i].addEventListener("click", function(){
//         console.log(this.innerHTML);
//     });
// }



