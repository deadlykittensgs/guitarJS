// define
const musicNotes = ["A", "A#", "B","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// get from doc
let chosenKey = document.getElementById("chosenKey")
let one = document.getElementById("root")
let two = document.getElementById("third")
let three = document.getElementById("fifth")
let four = document.getElementById("seventh")
let five = document.getElementById("ninth")
let six = document.getElementById("ten")
let seven = document.getElementById("eleven")
let nameOne = document.getElementById("i")
let nameTwo = document.getElementById("ii")
let nameThree = document.getElementById("iii")
let nameFour = document.getElementById("iv")
let nameFive = document.getElementById("v")
let nameSix = document.getElementById("vi")
let nameSeven = document.getElementById("vii")

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
// reset everything 
    // chosenKey.value = ""
    return correctedNoteOrder
}


// if (key.includes("m")){
//     ShowNotesInMinorKey(correctedNoteOrder)
//    }
//    else {
//     ShowNotesInMajorKey(correctedNoteOrder)
//    }


// find the index of the key given
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

// take the key and make a list of all the notes in order
function getScale(scaleSet) {
   let keyLocation = scaleSet
        let orderedArray = musicNotes.slice(keyLocation).concat(musicNotes.slice(0, keyLocation));
return  orderedArray
}

// major works
function ShowNotesInMajorKey() {

    index = getKey()
    
   one.innerText = index[0]
   two.innerText = index[2]
   three.innerText = index[4]
   four.innerText = index[5]
   five.innerText = index[7]
   six.innerText = index[9]
   seven.innerText = index[11]

   nameOne.innerText = "R"
   nameTwo.innerText = "2"
   nameThree.innerText = "3"
   nameFour.innerText = "4"
   nameFive.innerText = "5"
   nameSix.innerText = "6"
   nameSeven.innerText = "7"
} 


function ShowNotesInMinorKey(index) {

    index = getKey()

    one.innerText = index[0]
    two.innerText = index[2]
    three.innerText = index[3]
    four.innerText = index[5]
    five.innerText = index[7]
    six.innerText = index[8]
    seven.innerText = index[10]

    nameOne.innerText ="R"
    nameTwo.innerText ="2"
    nameThree.innerText ="b3"
    nameFour.innerText ="4"
    nameFive.innerText ="5"
    nameSix.innerText ="b6"
    nameSeven.innerText ="b7"
     
 } 

 function ShowNotesInPentatonic() {

    index = getKey()

    one.innerText = index[0]
    two.innerText = index[2]
    three.innerText = index[4]
    four.innerText = index[7]
    five.innerText = index[9]
    six.innerText = "-"
    seven.innerText = "-"

    nameOne.innerText ="R"
    nameTwo.innerText ="2"
    nameThree.innerText ="3"
    nameFour.innerText = "5"
    nameFive.innerText ="6"
    nameSix.innerText = "-"
    nameSeven.innerText ="-"

    

 }

 function ShowNotesInPentatonicMinor() {

    index = getKey()

    one.innerText = index[0]
    two.innerText = index[3]
    three.innerText = index[5]
    four.innerText = index[7]
    five.innerText = index[10]
    six.innerText = "-"
    seven.innerText = "-"

    nameOne.innerText ="R"
    nameTwo.innerText = "b3"
    nameThree.innerText ="P4"
    nameFour.innerText ="P5"
    nameFive.innerText ="b7"
    nameSix.innerText ="-"
    nameSeven.innerText ="-"
   
 }


 function ShowNotesInBlues() {

    index = getKey()

    one.innerText = index[0]
    two.innerText = index[3]
    three.innerText = index[5]
    four.innerText = index[6]
    five.innerText = index[7]
    six.innerText = index[10]
    seven.innerText = "-"


    nameOne.innerText ="R"
    nameTwo.innerText ="2"
    nameThree.innerText ="b3"
    nameFour.innerText = "3"
    nameFive.innerText ="5"
    nameSix.innerText ="6"
    nameSeven.innerText ="-"
 }


 function ShowNotesInBluesMinor() {

    index = getKey()

    one.innerText = index[0]
    two.innerText = index[3]
    three.innerText = index[5]
    four.innerText = index[6]
    five.innerText = index[7]
    six.innerText = index[10]
    seven.innerText = "-"
   
     nameOne.innerText ="1"
     nameTwo.innerText ="b3"
     three.innerText ="4"
     nameFour.innerText ="b5"
     nameFive.innerText ="5"
     nameSix.innerText = "b7"
     nameSeven.innerText ="-"
 }

 function refreshPage() {
    location.reload()

 }