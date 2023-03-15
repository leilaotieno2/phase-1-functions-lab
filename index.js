function distanceFromHqInBlocks(pickupLocation) {
  const headquarters = 42;
  return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const feetInBlock = 264;
  return distanceInBlocks * feetInBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  const feetInBlock = 264;
  return distanceInBlocks * feetInBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return 0.02 * (distance - 400);
  } else {
    return 0;
  }
}

const pickupLocation = 50;
const startBlock = 34;
const endBlock = 38;

console.log(distanceFromHqInBlocks(pickupLocation));
console.log(distanceFromHqInFeet(pickupLocation));
console.log(distanceTravelledInFeet(startBlock, endBlock));
console.log(calculatesFarePrice(startBlock, endBlock));


