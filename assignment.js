//feetToMile
//woodCalculator
//brickCalculator
//tinyFriend



/**************************************************************** 
                        No. of Assignment-1
******************************************************************/
//feetToMile

function feetToMile(feet){
    getAbsoluteFeet = Math.abs(feet);
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

function tinyFriend(friendsName){

    var nameWordCount = friendsName[0].length;
    var smallFriendName = [];
    for(var i=0; i<friendsName.length; i++){

        element = friendsName[i].length;
        if(element < nameWordCount){
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
                        No. of Assignment-2
******************************************************************/
//woodCalculator

















