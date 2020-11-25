let tamR = 40
let tam = 60;
let xB,yB,color;

let cartas = new Cartas (30,200);
function setup() {
  createCanvas(350, 650);
}

function draw() {
  background(225);

  //reset button 
  noStroke ();
  fill(0);
  square(290,20,tamR);

  //Cartas

  cartas.pintar();


  /**for (let i = 1; i < 16; i++) {

   // cartas actual = new Cartas (xB, yB, color);
    cartas.add(actual);
    xB += 100;
    color++;
    if (xB > 600) {
      yB += 15;
      xB = 50;
    }
    if (color > 4) {
      color = 1;
    }
**/
    var matrix = [];
    for(var i=0; i<4; i++) {
    matrix[i] = new Array(4);
}
}
 