volume = "";

function changeVolumeApi(newVolume) {
  return(
    fetch('http://localhost:8082/set/' + newVolume)
    .then(response => {
      return response;
    })
  )
}

function getVolumeApi() {
  return (fetch('http://localhost:8082/volume')
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse.volume;
    }))
}

async function changeVolume(changeAmount) {
  valume = await getVolumeApi();
  await changeVolumeApi(parseInt(volume) + changeAmount);
  updateUi();
}


function onAddClicked() {
  changeVolume(10);
  updateVolume();
}

function onReduceClicked(){
  changeVolume(-10);
  updateVolume();
}

async function updateVolume(){
  volume = await getVolumeApi();
  updateUi();
}

function updateUi() {
  document.getElementById("text_volume").innerHTML = volume;
}

window.addEventListener('load', function() {
  updateVolume();
})

console.log("loaded");