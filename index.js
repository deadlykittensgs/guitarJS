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
let clearAndReturn = document.getElementById("clearAndReturn")
// moods
let ProgressionsMoodOne = document.getElementById("ProgressionsMoodOne")
let ProgressionsMoodTwo = document.getElementById("ProgressionsMoodTwo")
let ProgressionsMoodThree = document.getElementById("ProgressionsMoodThree")
let ProgressionsMoodFour = document.getElementById("ProgressionsMoodFour")
// progressions
let ProgressionsP1 = document.getElementById("ProgressionsP1")
let ProgressionsP2 = document.getElementById("ProgressionsP2")
let ProgressionsP3= document.getElementById("ProgressionsP3")
let ProgressionsP4 = document.getElementById("ProgressionsP4")

// onclick 
let key =  ""
let notes = []


//error
let error = false

// functions 
function getKey() {
   error = false
    inputValue = chosenKey.value;
    let key = chosenKey.value.toUpperCase()
 
      let number = findIndexOfChord(key)
      let correctedNoteOrder = getScale(number)
      // chosenKey.value = ""   if you want to reset value on load
      return correctedNoteOrder
}

// find the index of the key given
function findIndexOfChord(inputValue) {
    let findKey = inputValue;
    let index = musicNotes.indexOf(findKey);
    index = musicNotes.indexOf(findKey);
      if (index !== -1) {
         return(index)
} else {

    console.log(findKey, "key Not Found");
    error = true
    return 
}
}



// take the key and make a list of all the notes in order
function getScale(scaleSet) {
   let keyLocation = scaleSet
   let orderedArray = musicNotes.slice(keyLocation).concat(musicNotes.slice(0, keyLocation));
return  orderedArray
}

function ShowNotesInMajorKey() {

   //get notes
   index = getKey()

   if(error == true) {return}
   //dynamically suggest progressions
   chordProgressionsInKey(index)
   ProgressionsMoodOne.innerText = "R-4-5-R: This progression is a classic and often!"
   ProgressionsMoodTwo.innerText = "R-6-4-5: This progression is also quite common!"
   ProgressionsMoodThree.innerText = "2-5-R: This progression is known as a turnar!"
   ProgressionsMoodFour.innerText = "R-6-2-5: Common progression in jazz and pop music!"
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
   
   return index[0,2,4,5,7,9,11]
} 
clearBoard ()


function ShowNotesInMinorKey(index) {
   index = getKey()
   if(error == true) {return}
   chordProgressionsInKeyMinor(index)
   ProgressionsMoodOne.innerText = "R-4-5: This progression is often used in minor blues and rock music."
   ProgressionsMoodTwo.innerText = "R-6-3-7: Known as the natural minor or Aeolian progression, it's common in pop and rock ballads."
   ProgressionsMoodThree.innerText = "R-7-6-5: Often used in pop and rock music, this progression has a descending bass line"
   ProgressionsMoodFour.innerText = "R-3-7-6:Used in many pop songs, this progression is known for its uplifting feel despite being in a minor key."
  
    showHide()
    highlightNotes(index[0],index[2],index[3],index[5],index[7],index[8],index[10])

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

 function ShowChord() {
   index = getKey()
   if(error == true) {return}
   chordProgressionsInKey(index)
   ProgressionsMoodOne.innerText = "R-4-5-R: This progression is a classic and often!"
   ProgressionsMoodTwo.innerText = "R-6-4-5: This progression is also quite common!"
   ProgressionsMoodThree.innerText = "2-5-R: This progression is known as a turnar!"
   ProgressionsMoodFour.innerText = "R-6-2-5: Common progression in jazz and pop music!"
   clearBoard ()
   showHide()
   highlightNotes(index[0],index[4],index[7])
   one.innerText = index[0]
   two.innerText = index[4]
   three.innerText = index[7]
   four.innerText = "-"
   five.innerText = "-"
   six.innerText = "-"
   seven.innerText = "-"

   nameOne.innerText ="R"
   nameTwo.innerText ="3"
   nameThree.innerText ="5"
   nameFour.innerText =""
   nameFive.innerText =""
   nameSix.innerText =""
   nameSeven.innerText =""

   return index

 }

 function ShowChordMinor() {
   index = getKey()
   if(error == true) {return}
   chordProgressionsInKeyMinor(index)
   ProgressionsMoodOne.innerText = "R-4-5: This progression is often used in minor blues and rock music."
   ProgressionsMoodTwo.innerText = "R-6-3-7: Known as the natural minor or Aeolian progression, it's common in pop and rock ballads."
   ProgressionsMoodThree.innerText = "R-7-6-5: Often used in pop and rock music, this progression has a descending bass line"
   ProgressionsMoodFour.innerText = "R-3-7-6:Used in many pop songs, this progression is known for its uplifting feel despite being in a minor key."
   clearBoard ()
   showHide()
   highlightNotes(index[0],index[3],index[7])

   one.innerText = index[0]
   two.innerText = index[3]
   three.innerText = index[7]
   four.innerText = "-"
   five.innerText = "-"
   six.innerText = "-"
   seven.innerText = "-"

   nameOne.innerText ="R"
   nameTwo.innerText ="b3"
   nameThree.innerText ="5"
   nameFour.innerText =""
   nameFive.innerText =""
   nameSix.innerText =""
   nameSeven.innerText =""

   return index

 }

 function ShowNotesInPentatonic() {
   index = getKey()
   if(error == true) {return}
   chordProgressionsInKey(index)
   ProgressionsMoodOne.innerText = "R-4-5-R: This progression is a classic and often!"
   ProgressionsMoodTwo.innerText = "R-6-4-5: This progression is also quite common!"
   ProgressionsMoodThree.innerText = "2-5-R: This progression is known as a turnar!"
   ProgressionsMoodFour.innerText = "R-6-2-5: Common progression in jazz and pop music!"
   clearBoard ()
    showHide()
    highlightNotes(index[0],index[2],index[4],index[7],index[9])
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

    return index

 }

 function ShowNotesInPentatonicMinor() {
   index = getKey()
   if(error == true) {return}
   chordProgressionsInKeyMinor(index)
   ProgressionsMoodOne.innerText = "R-4-5: This progression is often used in minor blues and rock music."
   ProgressionsMoodTwo.innerText = "R-6-3-7: Known as the natural minor or Aeolian progression, it's common in pop and rock ballads."
   ProgressionsMoodThree.innerText = "R-7-6-5: Often used in pop and rock music, this progression has a descending bass line"
   ProgressionsMoodFour.innerText = "R-3-7-6:Used in many pop songs, this progression is known for its uplifting feel despite being in a minor key."
   clearBoard ()
    showHide()
    highlightNotes(index[0],index[3],index[5],index[7],index[10])

    one.innerText = index[0]
    two.innerText = index[3]
    three.innerText = index[5]
    four.innerText = index[7]
    five.innerText = index[10]
    six.innerText = "-"
    seven.innerText = "-"

    nameOne.innerText ="R"
    nameTwo.innerText = "b3"
    nameThree.innerText ="4"
    nameFour.innerText ="5"
    nameFive.innerText ="b7"
    nameSix.innerText ="-"
    nameSeven.innerText ="-"

    return index
   
 }


 function ShowNotesInBlues() {
   index = getKey()
   if(error == true) {return}
   chordProgressionsInKey(index)
   ProgressionsMoodOne.innerText = "R-4-5-R: This progression is a classic and often!"
   ProgressionsMoodTwo.innerText = "R-6-4-5: This progression is also quite common!"
   ProgressionsMoodThree.innerText = "2-5-R: This progression is known as a turnar!"
   ProgressionsMoodFour.innerText = "R-6-2-5: Common progression in jazz and pop music!"
   clearBoard ()
    showHide()
    highlightNotes(index[0],index[2],index[3],index[4],index[7],index[9])

    one.innerText = index[0]
    two.innerText = index[2]
    three.innerText = index[3]
    four.innerText = index[4]
    five.innerText = index[7]
    six.innerText = index[9]
    seven.innerText = "-"


    nameOne.innerText ="R"
    nameTwo.innerText ="2"
    nameThree.innerText ="b3"
    nameFour.innerText = "3"
    nameFive.innerText ="5"
    nameSix.innerText ="6"
    nameSeven.innerText ="-"

    return index
 }


 function ShowNotesInBluesMinor() {

   index = getKey()
   if(error == true) {return}
   chordProgressionsInKeyMinor(index)
   ProgressionsMoodOne.innerText = "R-4-5: This progression is often used in minor blues and rock music."
   ProgressionsMoodTwo.innerText = "R-6-3-7: Known as the natural minor or Aeolian progression, it's common in pop and rock ballads."
   ProgressionsMoodThree.innerText = "R-7-6-5: Often used in pop and rock music, this progression has a descending bass line"
   ProgressionsMoodFour.innerText = "R-3-7-6:Used in many pop songs, this progression is known for its uplifting feel despite being in a minor key."
   clearBoard ()
    showHide()
    highlightNotes(index[0],index[3],index[5],index[6],index[7],index[10])

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


// light up correct notes on the dynamic Fret Board
function highlightNotes(n1,n2,n3,n4,n5,n6,n7,) {

   // try catch for the scales without 7 notes
    try {
      clearBoard ()
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
 highlightTwo.classList.add("glowpink"); 
 })
 
 let new3 = n3.replaceAll("#","S")
 let highlightThree = document.querySelectorAll(`.${new3}`)
 highlightThree.forEach(highlightThree =>{
 highlightThree.classList.add("glowred"); 
 })
 
 let new4 = n4.replaceAll("#","S")
 let highlightFour = document.querySelectorAll(`.${new4}`)
 highlightFour.forEach(highlightFour =>{
 highlightFour.classList.add("glowpurple"); 
 })
 
 let new5 = n5.replaceAll("#","S")
 let highlightFive= document.querySelectorAll(`.${new5}`)
 highlightFive.forEach(highlightFive =>{
 highlightFive.classList.add("glowgreen"); 
 })
 
 let new6 = n6.replaceAll("#","S")
 let highlightSix = document.querySelectorAll(`.${new6}`)
 highlightSix.forEach(highlightSix =>{
 highlightSix.classList.add("gloworange"); 
 })
 
 let new7 = n7.replaceAll("#","S")
 let highlightSeven = document.querySelectorAll(`.${new7}`)
 highlightSeven.forEach(highlightSeven =>{
 highlightSeven.classList.add("glowligh"); 
 })
 } catch (error) {
    console.log("there was an error loading all notes on the fretboard")
       
 }
 }

//reload  
 function refreshPage() {
    location.reload()

 }

/// show suggested chord progressions 
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



function closeONE() {
   let fretboardStuff = document.getElementById("fretboard")
   console.log("hit")
   fretboardStuff.className = "remove"
   clearAndReturn.innerText="Return Fretboard/Clear"
   return
}


// random note Generator 

// Get the reference to the <div> element
const myBox = document.getElementById('myBox');

// Function to update the text inside the box
function updateText() {
   let randomIndex = Math.floor(Math.random() * 11) 
    myBox.textContent = musicNotes[randomIndex];
  
}










//hide the dynamic chord progressions until they are named
function showHide() {
   answerHide.className = "none"
}


// to hide and show random note genarator if a stop button is added

// show the random note Generator
function showRandom()  {
   myBox.className = "none"
}


// hide the random note Generator
// function hideRandom() {
//    myBox.className = "hide"
// }

function clearBoard () {
   let removeHighlight = document.querySelectorAll(".glow")
   let removeHighlightRed = document.querySelectorAll(".glowred")
   let removeHighlightGreen = document.querySelectorAll(".glowgreen")
   let removeHighlightPink = document.querySelectorAll(".glowpink")
   let removeHighlightPurple = document.querySelectorAll(".glowpurple")
   let removeHighlightOrange = document.querySelectorAll(".gloworange")
   let removeHighlightLight = document.querySelectorAll(".glowligh")
   
   removeHighlight.forEach(removeHighlight => {
      removeHighlight.classList.remove("glow")
   })
   removeHighlightRed.forEach(removeHighlightRed => {
      removeHighlightRed.classList.remove("glowred")
   })
   removeHighlightGreen.forEach(removeHighlightGreen => {
      removeHighlightGreen.classList.remove("glowgreen")
   })
   removeHighlightPink.forEach(removeHighlightPink => {
      removeHighlightPink.classList.remove("glowpink")
   })
   removeHighlightPurple.forEach(removeHighlightPurple => {
      removeHighlightPurple.classList.remove("glowpurple")
   })
   removeHighlightOrange.forEach(removeHighlightOrange => {
      removeHighlightOrange.classList.remove("gloworange")
   })
   removeHighlightLight.forEach(removeHighlightLight => {
      removeHighlightLight.classList.remove("glowligh")
   })

}



function chordProgressionsInKeyMinor(notesForChords) {
  
   try {
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
   ProgressionsP1.innerText = `${value0}-${value5}-${value7}`
   ProgressionsP2.innerText =  `${value0}-${value8}-${value3}-${value10}`
   ProgressionsP3.innerText = `${value0}-${value10}-${value8}-${value7}`
   ProgressionsP4.innerText = `${value0}-${value3}-${value10}-${value8}`
}
  
    catch (error) {
      console.log("chord progression Error")
      
   }
}