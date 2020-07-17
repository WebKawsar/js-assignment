//feetToMile
//woodCalculator
//brickCalculator
//tinyFriend



/**************************************************************** 
                        No. of Assignment-1
******************************************************************/
//feetToMile

function feetToMile(feet) {
    getAbsoluteFeet = Math.abs(feet); // Get Absolute Value of Feet
    mile = getAbsoluteFeet / 5280;
    return mile;
}

var feet = 142560;
var resultMile = feetToMile(feet);
//console.log(resultMile);


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


var name = ["Karim", "Rahim", "Kawsar Ahmed", "Abc", "Mohammad", "Shamim", "Ajel", "Def"];
var getSmallName = tinyFriend(name);

//console.log(getSmallName);


/**************************************************************** 
                        No. of Assignment-3
******************************************************************/
//brickCalculator

function brickCalculator(floorNo) {

    const heightOneFeet = 1000;
    const fiftinFeetHeight = heightOneFeet * 15;
    const twelveFeetHeight = heightOneFeet * 12;
    const tenFeetHeight = heightOneFeet * 10;

    if (floorNo <= 10) {

        bricksAreNeed = fiftinFeetHeight * floorNo;
    }
    else if (10 < floorNo && floorNo <= 20) {

        bricksNeedTenFloor = (fiftinFeetHeight * 10);
        bricksNeedAdditional = (floorNo - 10) * twelveFeetHeight;
        bricksAreNeed = bricksNeedTenFloor + bricksNeedAdditional;

    }
    else if (floorNo > 20) {

        bricksNeedTenFloor = (fiftinFeetHeight * 10);
        bricksNeedTwentyFloor = (twelveFeetHeight * 10);
        bricksNeedAdditional = (floorNo - 20) * tenFeetHeight;
        bricksAreNeed = bricksNeedTenFloor + bricksNeedTwentyFloor + bricksNeedAdditional;

    }

    return bricksAreNeed;

}

var floor = 32;

getResult = brickCalculator(floor);
//console.log(getResult);



/**************************************************************** 
                        No. of Assignment-2
******************************************************************/
//woodCalculator

function woodCalculator(chairQty, tableQty, bedQty) {

    getAbsoluteChair = Math.abs(chairQty);  // Get Absolute Value of Chair Quantity
    getAbsoluteTable = Math.abs(tableQty);  // Get Absolute Value of Table Quantity
    getAbsoluteBed   = Math.abs(bedQty);      // Get Absolute Value of Bed Quantity

    const oneChair = 1;
    const oneTable = 3;
    const oneBed   = 5;

    woodNeedForChair = oneChair * getAbsoluteChair;
    woodNeedForTable = oneTable * getAbsoluteTable;
    woodNeedForBed   = oneBed * getAbsoluteBed;

    totalWoodNeed = woodNeedForChair + woodNeedForTable + woodNeedForBed;
    return totalWoodNeed;
}

var chair = 5;
var table = 5;
var bed = 5;

var getResult = woodCalculator(chair, table, bed);
console.log(getResult);







