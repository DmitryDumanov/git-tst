window.onload = function(){

   var button = document.querySelector(".btn");
   
   button.addEventListener( 'click', SayHello)
   function SayHello(){
      window.alert("Hello")
   }
}