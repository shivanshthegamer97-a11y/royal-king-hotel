let isDay = true;

function toggleExterior(){
  const hero = document.querySelector('.hero');

  if(isDay){
    hero.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('assets/exteriornight.jpg')";
  }else{
    hero.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('assets/exteriorday.jpg')";
  }

  isDay = !isDay;
}