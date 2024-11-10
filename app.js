let currentLight = 0;
const lights = document.querySelectorAll('.light');

function ozgarishi() {
    
    lights.forEach(light => {
        light.style.opacity = 0.3;
    });

   
    lights[currentLight].style.opacity = 1;

  
    currentLight = (currentLight + 1) % 3;
}


setInterval(ozgarishi, 4000);

ozgarishi();
