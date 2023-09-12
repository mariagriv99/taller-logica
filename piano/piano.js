class TeclaPiano {
    constructor(sound, alTextoQueAlejandraQueriaColocar) {
        this.sound = new Audio("Ejercicios/assets/sonidos/"+sound);
        this.element = document.createElement('div');
        this.element.classList.add('piano'); 
        this.element.innerText = alTextoQueAlejandraQueriaColocar
        this.element.addEventListener('click', () => this.playSound());
        document.getElementById('piano').appendChild(this.element);
    }

    playSound() {
        this.sound.play();
    }
}

//instancias TeclaPiano 
const teclaDo = new TeclaPiano('nota1.mp3', 'do');
const teclaRe = new TeclaPiano('nota2.mp3', 're');
const teclaMi = new TeclaPiano('nota3.mp3', 'mi');
const teclaFa = new TeclaPiano('nota4.mp3', 'fa');
const teclaSol = new TeclaPiano('nota5.mp3', 'sol');
const teclaLa = new TeclaPiano('nota6.mp3', 'la');
const teclaSi = new TeclaPiano('nota7.mp3', 'si');
const teclaDo2 = new TeclaPiano('nota8.mp3', 'do');

