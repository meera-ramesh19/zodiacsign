const chinese=document.querySelector(".animal")
chinese.addEventListener('click', function(){
    // window.location = "chinesehoroscope".html";
   document.location.href = 'https://western-zodiac.netlify.app';
});
const western = document.querySelector(".planet");

western.addEventListener("click", function(){
  // window.location = "westernhoroscope.html"
    document.location.href ='https://chinese-zodiac.netlify.app';

 });
