//feetToMile
//woodCalculator
//brickCalculator
//tinyFriend


/**************************************************************** 
                        No. of Assignment-1
******************************************************************/
//feetToMile

function feetToMile(feet) {

    const getAbsoluteFeet = Math.abs(feet); // Get Absolute Value of Feet
    const mile = getAbsoluteFeet / 5280;
    const getFixedMile = mile.toFixed(2);   // unfinite number fixed

    return getFixedMile;

}

let feet = 1042560;
let getMile = feetToMile(feet);
console.log(getMile);



/**************************************************************** 
                        No. of Assignment-2
******************************************************************/
//woodCalculator

function woodCalculator(chairQty, tableQty, bedQty) {

    const getAbsoluteChair = Math.abs(chairQty);  // Get Absolute Value of Chair Quantity
    const getAbsoluteTable = Math.abs(tableQty);  // Get Absolute Value of Table Quantity
    const getAbsoluteBed   = Math.abs(bedQty);    // Get Absolute Value of Bed Quantity

    const oneChair = 1;  // Here value fixed by Assignment Condition
    const oneTable = 3;  
    const oneBed   = 5;

    const woodNeedForChair = oneChair * getAbsoluteChair;
    const woodNeedForTable = oneTable * getAbsoluteTable;
    const woodNeedForBed   = oneBed * getAbsoluteBed;

    const totalWoodNeed = woodNeedForChair + woodNeedForTable + woodNeedForBed;
    return totalWoodNeed;

}

let chair = 50;
let table = 40;
let bed = 100;

let getQunatity = woodCalculator(chair, table, bed);
console.log(getQunatity);



/**************************************************************** 
                        No. of Assignment-3
******************************************************************/
//brickCalculator

function brickCalculator(floorNo) {

    const bricksNeedOneFeet = 1000;
    const fifteenFeetHeight = bricksNeedOneFeet * 15;
    const twelveFeetHeight = bricksNeedOneFeet * 12;
    const tenFeetHeight = bricksNeedOneFeet * 10;

    if (floorNo <= 10) {

        bricksAreNeed = fifteenFeetHeight * floorNo;
    }
    else if (10 < floorNo && floorNo <= 20) {

        const bricksNeedTenFloor = (fifteenFeetHeight * 10);
        const bricksNeedAdditional = (floorNo - 10) * twelveFeetHeight;
        bricksAreNeed = bricksNeedTenFloor + bricksNeedAdditional;

    }
    else if (floorNo > 20) {

        const bricksNeedTenFloor = (fifteenFeetHeight * 10);
        const bricksNeedSecondTenFloor = (twelveFeetHeight * 10);
        const bricksNeedAdditional = (floorNo - 20) * tenFeetHeight;
        bricksAreNeed = bricksNeedTenFloor + bricksNeedSecondTenFloor + bricksNeedAdditional;

    }

    return bricksAreNeed;

}

let floor = 30;

let getResult = brickCalculator(floor);
console.log(getResult);



/**************************************************************** 
                        No. of Assignment-4
******************************************************************/
//tinyFriend

function tinyFriend(friendsName) {

    var nameWordCount = friendsName[0].length;
    var smallFriendName = [];
    for (var i = 0; i < friendsName.length; i++) {

        element = friendsName[i].length;
        if (element < nameWordCount) {
            nameWordCount = element;
            smallFriendName = friendsName[i];
        }

    }
    return smallFriendName;

}

let name = ["Karim", "Rahim", "Kawsar Ahmed", "Abc", "Mohammad", "Shamim", "Ajel", "Def"];
let getSmallName = tinyFriend(name);

console.log(getSmallName);

