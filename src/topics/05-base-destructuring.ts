interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const song = "New song";
const {  // se puede desestructurar en la misma linea un objeto dentro de otro pero se recomiendo hacer por fuera en una variable para tener mejor lectura del codigo.
  song: anotherSong,
  songDuration: duration,
  details
//   details: {author}
} = audioPlayer;

const {author} = details;

// console.log(`Song:  `, anotherSong);
// console.log(`Duration:  `, duration);
// console.log(`Author:  `, author);

const [,,trunks = 'Not found']: string[] = ['Goku','Vegeta']; // se puede desestructurar un array con llaves [] para obtener algun dato del arreglo
// const trunks = dbz[4] || 'No hay personaje';

console.error('Personaje 3: ', trunks );



export {};
