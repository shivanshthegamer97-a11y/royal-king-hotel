let isDay = true;

function toggleExterior(){
  const hero = document.querySelector('.hero');
  if(isDay){
    hero.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('https://drive.google.com/uc?id=153O8rmBTlUlRD_r3_zLFiHWwoIunOa4V')";
  }else{
    hero.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('https://drive.google.com/uc?id=1HvHIIZNQFVLH2GO44ukp5uofyimk6ccN')";
  }
  isDay = !isDay;
}
