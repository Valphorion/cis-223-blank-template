// Functions
// - Input: arguments; specified by parameters
// - Body: block of code
// - Output: return of a value

//this array it to be referred to whenever Lanky insults you.
const insults = [
    "Lanky: You Throw Like a Girl!",
    "Lanky: Is that the best you got!",
    "Lanky: I bet you never played catch before in your life.",
    "Lanky: So close yet so far!",
    "Lanky: I know you can't possibly be this bad, nobody misses that many times in a row.",
    "Lanky: You have no baseball players in your bloodline do you.",
    "Lanky: Seriously my grandmother could hit this tank will fewer attempts and she is in a wooden onesie.",
    "Lanky: Wow, You really don't give up, I guess that is why the girls down like you.",
    "Lanky: Ok now lets calm down, that one was too close for comfort.",

]

// let this variable be the threshhold needed to hit before Lanky is hit.
var hitGoal = 10;

// let this variable be the the chance the player has to hit the target.
var hitChance = 0;

//create the button to that the player can click.
const ballButton = document.createElement('button');

//create the text for the button.
const ballButtonSign = new Text ("Throw the Ball");

//Make the button have the text
ballButton.appendChild(ballButtonSign);

//Add the actual Button to the website
document.body.appendChild(ballButton);

//Welcome people to the Website and introduce them to the attraction.
alert("Hello Website Surfer and welcome to the attraction. At this moment you are in front of a dunk tank with the clown known as Lanky standing in front of you. Lanky's dunk tank is rigged and only you can finally dunk him. Just click the button to throw the ball.")

//Multiple Pictures will now be created
const lankyTheclown = document.createElement('img');
const dunkTankimg = document.createElement('img');

//Establish the Url's for the Website to use
lankyTheclown.src = "https://media.istockphoto.com/id/665692578/vector/cartoon-clown-face-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-UyR8W5x4R4SRxIg-zI6aMaLYO7Fro6O62IyzxdMrmI=";
dunkTankimg.src = "https://media.istockphoto.com/id/160339706/pl/wektor/dunk-tank.jpg?s=1024x1024&w=is&k=20&c=XGO0LXFCkC4xciBtxd20O7u93qJRgIqRokqtxEXacT4=";

//Make the Lanky and Dunktank appear in the website.
document.body.appendChild(lankyTheclown);
document.body.appendChild(dunkTankimg);

//Changeing Lanky's picture size so it looks like he could fit in the dunktank.
lankyTheclown.style.width = "400px";
lankyTheclown.style.length = "400px";

//start the timer
decrementHitChance();

// when you click the button the chance to hit increases
ballButton.addEventListener('click',function() {
    hitChance++;
    console.log("Current Value of hitChance:", hitChance);
    
    checkHitgoal();
});

//check to see if you have reached the hit goal, and remove Lanky's image, if not then Lanky says an insult.
function checkHitgoal() {
    if (hitChance === hitGoal) {
      alert("Congradulations for finally hitting the target. Now Lanky is going to go dry off now, hopefully he will hopefully be less rude in the future. In the meantime thanks for coming to our attraction Web Surfer.");
      removeImage(lankyTheclown);
    } else if (hitChance < hitGoal) {
        alert(insults[hitChance - 1]);
    }
}

//this is to remove the image of lanky from the website.
function removeImage(imgElement) {
    imgElement.parentNode.removeChild(imgElement);
}

