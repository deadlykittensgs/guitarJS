// define
const musicNotes = ["A", "A#", "B","C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// get from doc 

let neckDynamic = document.getElementById("neckDynamic")
let answerHide = document.getElementById("answer")
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

let ProgressionsP1 = document.getElementById("ProgressionsP1")
let ProgressionsP2 = document.getElementById("ProgressionsP2")
let ProgressionsP3= document.getElementById("ProgressionsP3")
let ProgressionsP4 = document.getElementById("ProgressionsP4")


// onclick 
let key =  ""
let notes = []



// functions 
function getKey() {
   // maybe put an if clause here for the minor catch
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
    showHide()
    highlightNotes(index[0],index[2], index[4],index[5],index[7],index[9],index[11])
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
   chordProgressionsInKey(index)
   return index[0,2,4,5,7,9,11]
} 


function ShowNotesInMinorKey(index) {

    index = getKey()
    showHide()

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

    return index
     
 } 

 function ShowNotesInPentatonic() {

    index = getKey()
    showHide()

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

    chordProgressionsInKey(index)
    return index

 }

 function ShowNotesInPentatonicMinor() {

    index = getKey()
    showHide()

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

    return
   
 }


 function ShowNotesInBlues() {

    index = getKey()
    showHide()

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
    chordProgressionsInKey(index)
    return index
 }


 function ShowNotesInBluesMinor() {

    index = getKey()
    showHide()

    one.innerText = index[0]
    two.innerText = index[3]
    three.innerText = index[5]
    four.innerText = index[6]
    five.innerText = index[7]
    six.innerText = index[10]
    seven.innerText = "-"
   
     nameOne.innerText ="1"
     nameTwo.innerText ="b3"
     nameThree.innerText ="4"
     nameFour.innerText ="b5"
     nameFive.innerText ="5"
     nameSix.innerText = "b7"
     nameSeven.innerText ="-"

     return index
 }

 function refreshPage() {
    location.reload()

 }

function showHide() {
   answerHide.className = "none"
}

function chordProgressionsInKey(notesForChords) {
   let orderedArrayOfNotes = notesForChords
   let value0 = orderedArrayOfNotes[0]
   let value1 = orderedArrayOfNotes[1]
   let value2 = orderedArrayOfNotes[2]
   let value3 = orderedArrayOfNotes[3]
   let value4 = orderedArrayOfNotes[4]
   let value5 = orderedArrayOfNotes[5]
   let value6 = orderedArrayOfNotes[6]
   let value7 = orderedArrayOfNotes[7]
   let value8 = orderedArrayOfNotes[8]
   let value9 = orderedArrayOfNotes[9]
   let value10 = orderedArrayOfNotes[10]
   let value11 = orderedArrayOfNotes[11]
   ProgressionsP1.innerText = `${value0}-${value5}-${value7}-${value0}`
   ProgressionsP2.innerText =  `${value0}-${value9}-${value5}-${value7}`
   ProgressionsP3.innerText = `${value2}-${value7}-${value0}`
   ProgressionsP4.innerText = `${value0}-${value9}-${value2}-${value7}`
}

// function chordProgressionsInKeyMinor(notesForChords) {
//    let orderedArrayOfNotes = notesForChords
//    let value0 = orderedArrayOfNotes[0]
//    let value1 = orderedArrayOfNotes[1]
//    let value2 = orderedArrayOfNotes[2]
//    let value3 = orderedArrayOfNotes[3]
//    let value4 = orderedArrayOfNotes[4]
//    let value5 = orderedArrayOfNotes[5]
//    let value6 = orderedArrayOfNotes[6]
//    let value7 = orderedArrayOfNotes[7]
//    let value8 = orderedArrayOfNotes[8]
//    let value9 = orderedArrayOfNotes[9]
//    let value10 = orderedArrayOfNotes[10]
//    let value11 = orderedArrayOfNotes[11]
//    ProgressionsP1.innerText = `${value0}-${value5}-${value7}-${value0}`
//    ProgressionsP2.innerText =  `${value0}-${value9}-${value5}-${value7}`
//    ProgressionsP3.innerText = `${value2}-${value7}-${value0}`
//    ProgressionsP4.innerText = `${value0}-${value9}-${value2}-${value7}`
// }



// Get the reference to the <div> element
const myBox = document.getElementById('myBox');


// Function to update the text inside the box
function updateText() {
   let randomIndex = Math.floor(Math.random() * 11) 
    myBox.textContent =  musicNotes[randomIndex];
  
}



// Update the text every second
setInterval(updateText, 1000);

function speedOfDisplay(number) {
   speed =  speed  +  number
   return  
}

function hideRandom() {
   myBox.className = "hide"
}
function showRandom()  {
   myBox.className = "none"
   
}


function highlightNotes(n1,n2,n3,n4,n5,n6,n7,) {

   let removeHighlight = document.querySelectorAll(".glow")
removeHighlight.forEach(removeHighlight => {
   removeHighlight.classList.remove("glow")
})

  let new1 = n1.replaceAll("#","S")
   let highlight = document.querySelectorAll(`.${new1}`)
   highlight.forEach(highlight =>{
   highlight.classList.add("glow"); 
 })


let new2 = n2.replaceAll("#","S")
let highlightTwo = document.querySelectorAll(`.${new2}`)
highlightTwo.forEach(highlightTwo =>{
highlightTwo.classList.add("glow"); 
})

let new3 = n3.replaceAll("#","S")
let highlightThree = document.querySelectorAll(`.${new3}`)
highlightThree.forEach(highlightThree =>{
highlightThree.classList.add("glow"); 
})
let new4 = n4.replaceAll("#","S")
let highlightFour = document.querySelectorAll(`.${new4}`)
highlightFour.forEach(highlightFour =>{
highlightFour.classList.add("glow"); 
})
let new5 = n5.replaceAll("#","S")
let highlightFive= document.querySelectorAll(`.${new5}`)
highlightFive.forEach(highlightFive =>{
highlightFive.classList.add("glow"); 
})
let new6 = n6.replaceAll("#","S")
let highlightSix = document.querySelectorAll(`.${new6}`)
highlightSix.forEach(highlightSix =>{
highlightSix.classList.add("glow"); 
})
let new7 = n7.replaceAll("#","S")
let highlightSeven = document.querySelectorAll(`.${new7}`)
highlightSeven.forEach(highlightSeven =>{
highlightSeven.classList.add("glow"); 
})

}
//  let highlightTwo = document.querySelectorAll(`.${n2}`)
//  let highlightThree = document.querySelectorAll(`.${n3}`)
//  let highlightFour = document.querySelectorAll(`.${n4}`)
//  let highlightFive = document.querySelectorAll(`.${n5}`,)
//  let highlightSix = document.querySelectorAll(`.${n6}`)
//  let highlightSeven = document.querySelectorAll(`.${n7}`)



//  highlightTwo.forEach(highlight =>{
//    highlight.classList.add("glow"); 
//  })
//  highlightThree.forEach(highlight =>{
//    highlight.classList.add("glow"); 
//  })
//  highlightFour.forEach(highlight =>{
//    highlight.classList.add("glow"); 
//  })
//  highlightFive.forEach(highlight =>{
//    highlight.classList.add("glow"); 
//  })
//  highlightSix.forEach(highlight =>{
//    highlight.classList.add("glow"); 
//  })
//  highlightSeven.forEach(highlight =>{
//    highlight.classList.add("glow"); 
//  })






