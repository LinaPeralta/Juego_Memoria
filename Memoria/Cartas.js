class Cartas{



constructor (x,y) {
    this.x=x;
    this.y=y;
    this.tam=100;
    this.color=color;
}

/**pintar (){

    for (let x=8; x < 350; x += 30) {
        
        for (let y=8; x < 650; x += 30) {
    
        fill (0);
        square (this.x,this.y,tam);
    }
  
}

abrir (){

}

mostrar (){

} **/

pintar (){

    switch (color){
		
        case 0:
        app.fill(255);
        app.rect(x, y, 90, 10);
        break;
        //rojo
        case 1:
        app.fill(255,0,0);
        app.rect(x, y, 90, 10);
        break;
        //amarillo
        case 2:
        app.fill(255,255,0);
        app.rect(x, y, 90, 10);
        break;
        //verde
        case 3:
        app.fill(0,255,0);
        app.rect(x, y, 90, 10);
        break;
        case 4:
        app.fill(0,0,255);
        app.rect(x, y, 90, 10);
        break;
    }
}
}