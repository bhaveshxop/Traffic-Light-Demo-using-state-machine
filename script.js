let trafficState = 0;
let intervalTime = 4000; // 4 seconds per state

function resetLights() {
  document.querySelectorAll('.light').forEach(light => {
    light.style.backgroundColor = "black";
  });
}

function setLight(light, color) {
  light.style.backgroundColor = color;
}

function changeLights() {
  resetLights();

  switch (trafficState) {
    case 0:
      // North-South Green, East-West Red
      setLight(document.getElementById('greenLight1'), 'green');
      setLight(document.getElementById('redLight2'), 'red');
      alert('North-South: Green - Cars can move North-South');
      break;
    case 1:
      // North-South Yellow
      setLight(document.getElementById('yellowLight1'), 'yellow');
      alert('North-South: Yellow - Cars should prepare to stop');
      break;
    case 2:
      // North-South Red, East-West Green
      setLight(document.getElementById('redLight1'), 'red');
      setLight(document.getElementById('greenLight2'), 'green');
      alert('East-West: Green - Cars can move East-West');
      break;
    case 3:
      // East-West Yellow
      setLight(document.getElementById('yellowLight2'), 'yellow');
      alert('East-West: Yellow - Cars should prepare to stop');
      break;
  }

  trafficState = (trafficState + 1) % 4;
}

// Automatically change lights at intervals
setInterval(changeLights, intervalTime);
