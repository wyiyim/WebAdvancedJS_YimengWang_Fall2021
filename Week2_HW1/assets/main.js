const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather() {
  const choice = select.value;

  if(choice === 'sunny') {
    para.textContent = "It is nice and sunny outside today. Go outside and have some fun!";
  } else if(choice === 'rainy') {
    para.textContent = "Rain is falling outside. Don't forget to bring an umbrella.";
  } else if(choice === 'snowing') {
    para.textContent = "The snow is coming down, it is freezing! Do you want to build a snowman?";
  } else if(choice === 'overcast') {
    para.textContent = "The sky is grey and gloomy, it could turn any minute, so take an umbrella just in case.";
  } else {
    para.textContent = '';
  }
}
