var juego = new Phaser.Game(990, 990, Phaser.AUTO, 'bloque_juego');
//(ancho,alto,render que compila el juego, nombre del div)
var fondoJuego;
var boton;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal = {
    preload: function () {
        juego.load.image('fondo', 'img/bg.png');
        juego.load.image('enemigo1', 'img/enemy.png');
        juego.load.image('enemigo2', 'img/enemy.png');
        juego.load.image('enemigo3', 'img/enemy.png');
        juego.load.image('enemigo4', 'img/enemy.png');
        juego.load.image('enemigo5', 'img/enemy.png');
        juego.load.image('enemigo6', 'img/enemy.png');
        juego.load.image('enemigo7', 'img/enemy.png');
        juego.load.image('enemigo8', 'img/enemy.png');
        juego.load.image('enemigo9', 'img/enemy.png');
    },

    create: function () {
        //mostrar pantalla
        fondoJuego = juego.add.tileSprite(0, 0, 990, 990, 'fondo');
        enemigo1 = juego.add.sprite(700, 100, 'enemigo1');
        enemigo2 = juego.add.sprite(700, 150, 'enemigo2');
        enemigo3 = juego.add.sprite(700, 200, 'enemigo3');

        enemigo4 = juego.add.sprite(750, 100, 'enemigo4');
        enemigo5 = juego.add.sprite(750, 150, 'enemigo5');
        enemigo6 = juego.add.sprite(750, 200, 'enemigo6');

        enemigo7 = juego.add.sprite(800, 100, 'enemigo4');
        enemigo8 = juego.add.sprite(800, 150, 'enemigo5');
        enemigo9 = juego.add.sprite(800, 200, 'enemigo6');
    },

    update: function () {
    }
};

//Asignamos el estado que acaba de crear al juego
juego.state.add('principal', estadoPrincipal);
//Iniciar el juegodel estado principal por defecto
juego.state.start('principal');