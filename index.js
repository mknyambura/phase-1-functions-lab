// Code your solution in this file!
function distanceFromHqInBlocks(distanceinblocks) {
    //returns the number of blocks given a value
    return (Math.abs(distanceinblocks - 42));
}

function distanceFromHqInFeet(distanceinblocks){
    return (distanceFromHqInBlocks(distanceinblocks) * 264);
}

function distanceTravelledInFeet(start, end){
    return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance <= 400){
        price = 0;
    }else if(distance <= 2000){
        price = ((distance - 400) * 0.02);
    }else if(distance <= 2500){
        price = 25;
    }else{
        price = 'cannot travel that far';
    }
    return price;
}