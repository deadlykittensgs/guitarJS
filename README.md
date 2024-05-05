live deploy https://remarkable-druid-92d73e.netlify.app/


goal

facebook  music group users constantly post pictures of new players with their finger position on the neck asking what chord they are playing. this app will be to help them be able to look up chords easily.

goal two is to be able to put a key in and see all of the notes in that key on the screen 

goal three is to make a random note generator that cycles through all the notes and helps you practice finding the notes on the fretboard


goal make a picture of the fret board that you can click the notes to highlight them

next make a function that takes the highlighted notes and checks them with a database to see what chord would be made out of that variation of notes. if none return chord not found 

secondary objective make a page that shows all the notes in scales in a key 




information    

const musicKeys = {
  major: {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
  },
  minor: {
    Cm: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    Dbm: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bbb', 'Cb'],
    Dm: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
    Ebm: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
    Em: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    Fm: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    Gbm: ['Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Ebb', 'Fb'],
    Gm: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    Abm: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
    Am: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    Bbm: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
    Bm: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
  }
};

console.log(musicKeys.major.C); // Outputs: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
console.log(musicKeys.minor.Cm); // Outputs: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
