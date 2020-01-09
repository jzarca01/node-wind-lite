const Wind = require("../dist/"); // require('node-wind-lite');
const wind = new Wind();

async function init() {
  try {
    const scooters = await wind.getBoardsNearby({
      latitude: 32.081215,
      longitude: 34.808956
    });
    console.log(scooters)
    const bikes = await wind.getBikesNearby({
      latitude: 32.081215,
      longitude: 34.808956
    })
    console.log(bikes)
  }
  catch(err) {
    console.log(err)
  }
}

init();
