// define
const musicNotes = ["A", "A#", "B","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];



// get from doc
let chosenKey = document.getElementById("chosenKey")
let Submit = document.getElementById("Submit")

// onclick 

let key =  ""
let notes = []


// functions 


function getKey() {
    inputValue = chosenKey.value;
    let key = chosenKey.value.toUpperCase()
    console.log(key)
    let number = findIndexOfChord(key)
    console.log(number)
   let correctedNoteOrder = getScale(number)
   console.log(correctedNoteOrder)


// reset everything 
    chosenKey.value = ""
    return key
}
function findIndexOfChord(inputValue) {
    let findKey = inputValue;
    let index = musicNotes.indexOf(findKey);
    index = musicNotes.indexOf(findKey);
if (index !== -1) {
return(index)
} else {
    console.log(findKey, "key Not Found");
}
}


function getScale(scaleSet) {
   let keyLocation = scaleSet
    let orderedArray = musicNotes.slice(keyLocation).concat(musicNotes.slice(0, keyLocation));

//console.log(orderedArray)
return  orderedArray

//let correctNotes = []
    //set the array to start at the [i index of the key] and go through the rest of the notes and make a new array
    // get the notes in a scale in the 
    // given key and light them up on the fretboard 

}



function WhatKey(notes) {
    //taker notes selected and return a chord name
}

