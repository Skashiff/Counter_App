let counter = 99999;

const DISPLAY = document.getElementById('display');
const ALERT = document.querySelector(".alert");

//console.log(DISPLAY);
// 
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const paddingLength = Math.max(0, desiredLength - originalString.length);
    return paddingCharacter.repeat(paddingLength) + originalString;
}
  
function updateDisplay(){
    const spanElements = DISPLAY.children;
    let counterString = addPaddingAtStart(counter.toString(), 4, '0'); // Default to 4 digits
    const Digits = counterString.length;
// Check if the number of digits exceeds the number of existing boxes
     if (Digits > spanElements.length) {
        const AddNum = Digits - spanElements.length;
        addBoxes(AddNum);
    } 
// Check if the number of digits is less than the number of existing boxes and less than or equal to 6
    else if (Digits < spanElements.length && Digits <= 6) {
        const RemoveNum = spanElements.length - Digits;
        removeBoxes(RemoveNum);
    }

// Update the text content of each box element with the counter digits
    for (let i = 0; i < spanElements.length; i++) {
        spanElements[i].innerText = counterString[i];
    }
}

function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.appendChild(SPAN);
}

function addBoxes(AddNum) {
    for (let i = 0; i < AddNum; i++) {
        addBox();
    }
}

function removeBoxes(RemoveNum) {
    const spanElements = DISPLAY.children;
    for (let i = 0; i < RemoveNum; i++) {
        DISPLAY.removeChild(spanElements[spanElements.length - 1]); // Remove the last box element
    }
}

function increment(){
    if(counter >= 9999) {
        addBox(0)

    };
    counter++;
    updateDisplay();
}

function decrement(){
    if(counter === 0) return;
    counter--;
    updateDisplay();
}

function reset(){
    counter =0;
    updateDisplay();
}

function addZeroPaddingToStart() {

}

updateDisplay();