console.log('Hola mundo!');
const myName = 'Pablo';
let myAge = 22;
let x = 3;
let y = 4;
const likesMusic = true;
console.log('myName', myName);
console.log('myAge', myAge);
console.log('x', x);
console.log('y', y);
console.log('likesMusic', likesMusic);

// myName='Juan';

console.log('myName', typeof myName);
console.log('myAge', typeof myAge);
console.log('x', typeof x);
console.log('y', typeof y);
console.log('likesMusic', typeof likesMusic);

let z = y * x;
console.log(z);

z = y / x;
console.log(z);

z = y + x;
console.log(z);

z = y - x;
console.log(z);

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

if (likesMusic == true) {
  console.log('Me gusta la música');
} else {
  console.log('No me gusta la música');
}

// let compraRealizada = false;
// let pisoBarrido = true;
// let dinero;
// if(compraRealizada==true){
//     dinero = 10;
// }
// else if(pisoBarrido==true){
//     dinero = 10;
// }
// else{
//     dinero = 5;
// }

let compraRealizada = false;
let pisoBarrido = true;
let dinero;
if (compraRealizada == true || pisoBarrido == true) {
  dinero = 10;
} else {
  dinero = 5;
}

console.log('El dinero de tu hermanito es:', dinero);

let compraRealizada2 = false;
let pisoBarrido2 = true;
let dinero2;
if (compraRealizada2 == true || pisoBarrido2 == true) {
  dinero2 = 20;
} else {
  dinero2 = 0;
}

console.log('El dinero de tu hermanito es:', dinero2);

// YOB = Year of Birth
let YOB = 1999;
const d = new Date();
// CY = Current Year
let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (year - YOB == 1) {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + (year - YOB) + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' años');
  }
}

for (let num = 0; num <= 35; num++) {
  console.log('No debo de comerme el lonche de mis compañeros');
}

let year = YOB;
while (year <= CY) {
  let age = year - YOB;
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (age == 1) {
    console.log('En ' + year + ' yo tenía ' + age + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + age + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + age + ' años');
  }
  year++;
}

// function aCelsius(fahrenheit){
//   return (fahrenheit-32)/ 1.8;
// }

const aCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

console.log(aCelsius(100));



const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);

nameElement.textContent = myName;
ageElement.textContent = myAge;

if (likesMusic == true) {
  likesMusicElement.textContent = 'Me gusta la música';
} else {
  likesMusicElement.textContent = 'No me gusta la música';
}

const body = document.querySelector('body');
const text = document.createElement('p');
text.textContent = 'Hola mundo desde el DOM!';

body.appendChild(text);

body.removeChild(text);


const personaJP = {
  nombre: {
    primerNombre: 'Juan Pablo',
    apellidoPaterno: 'Lozano',
    apellidoMaterno: 'Escareño',
  },
  edad: 22,
  bio: function () {
    console.log(this.nombre.primerNombre + ' Tiene ' + this.edad + ' años');
  },
  presentarseArrowFn: () => {
    console.log(this.nombre.primerNombre);
  },
  presentarse: function () {
    console.log('Hola! Mi nombre es ' + this.nombre.primerNombre);
  },
};

const frutas = ['Manzana', 'Mango', 'Melon', 'Sandía', 'Durazno'];
frutas[5] = 'Piña';
frutas[0] = 'Higo';
frutas.push('Frambuesa');
frutas.shift();
console.log(frutas);

const calificaciones = [10, 6, 5, 8, 8, 7, 5, 10, 9, 9];
const reprobados = calificaciones.find((calificacion) => calificacion <= 5);
const mayorA8 = calificaciones.map((califacion) => califacion >= 8);
const aprobados = calificaciones.filter((califacion) => califacion > 5);
const sumatoria = calificaciones.reduce(
  (valorAnterior, valorActual) => valorAnterior + valorActual,
  0
);

const promedio = sumatoria / calificaciones.length;
console.log('reprobados', reprobados);
console.log('aprobados', aprobados);
console.log('Mayor a 8', mayorA8);

console.log('El promedio general de la escuela es de :' + promedio);

const guessedAgeElement = document.querySelector('#guessedAge');
const isGuessRightElement = document.querySelector('#isGuessRight');









const displayContent = (content) => {
  guessedAgeElement.textContent = content.age;
  if (content.age === myAge) {
    isGuessRightElement.textContent = 'esto es correcto';
  } else {
    isGuessRightElement.textContent = 'esto es incorrecto';
  }
};

const fetchAgeGuess = async () => {
  const response = await fetch('https://api.agify.io/?name=Pablo');
  const content = await response.json();
  displayContent(content);
};








// Callbacks
// const getAgeGuess = (callback) => {
//   const request = new XMLHttpRequest();
//   request.onreadystatechange = function () {
//     if (request.readyState == 4 && request.status == 200) {
//       callback(JSON.parse(request.responseText));
//     }
//   };
//   request.open('GET', 'https://api.agify.io/?name=Pablo');
//   request.send();
// };
// getAgeGuess(displayContent);

// // Promesas
// const fetchPromise = fetch('https://api.agify.io/?name=Pablo');

// console.log(fetchPromise);

// fetchPromise
//   .then((response) => response.json())
//   .then((res) => displayContent(res));

// console.log('Comenzando petición…');



fetchAgeGuess();


function playNote(key) {
  // Obtener la nota
  const noteAudio = document.getElementById(key.dataset.note);
  // Resetear la ejecución de la nota
  // noteAudio.currentTime = 0;
  // Utilizar método play() de la nota
  noteAudio.play();

  // Añadimos clase active
  key.classList.add('active');
  // Agregamos un event listener al estado ended del evento keydown
  noteAudio.addEventListener('ended', () => {
    // Cuando termine de reproducirse el sonido, removemos clase active
    key.classList.remove('active');
  });
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  console.log(whiteKeys[whiteKeyIndex]);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});
