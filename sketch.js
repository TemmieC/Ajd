var alfilBlancoImg, alfilNegroImg;
var torreBlancaImg, torreNegraImg;
var caballoBlancoImg, caballoNegroImg;
var reyBlancoImg, reyNegroImg;
var reynaBlancaImg, reynaNegraImg;
var peonBlancoImg, peonNegroImg;
var backgroundImg, backgroundSprite;
var rey1A, rey2A;
var reyna1A, reyna2B;
var torre1B, torre2B;
var alfil1B, alfil2B;
var caballo1B, caballo2B;
var torre1A, torre2A;
var alfil1A, alfil2A;
var caballo1A, caballo2A;
var peon1A, peon2A, peon3A, peon4A, peon5A, peon6A, peon7A, peon8A;
var peon1B, peon2B, peon3B, peon4B, peon5B, peon6B, peon7B, peon8B;
var blancas;
var negras;
var turno = "blancas"; 

function preload(){
 backgroundImg = loadImage ("assets/background.jpg");
 reyNegroImg = loadImage ("assets/ReyNegro.png");
 reyBlancoImg = loadImage ("assets/ReyBlanco.png");
 reynaBlancaImg = loadImage ("assets/ReynaBlanca.png");
 reynaNegraImg = loadImage ("assets/ReynaNegra.png");
 alfilBlancoImg = loadImage ("assets/AlfilBlanco.png");
 alfilNegroImg  = loadImage ("assets/AlfilNegro.png");
 caballoBlancoImg  = loadImage ("assets/CaballoBlanco.png");
 caballoNegroImg  = loadImage ("assets/CaballoNegro.png");
 torreBlancaImg  = loadImage ("assets/TorreBlanca.png");
 torreNegraImg  = loadImage ("assets/TorreNegra.png");
 peonBlancoImg = loadImage ("assets/peonBlanco.png");
 peonNegroImg = loadImage ("assets/PeonNegro.png");



}

function setup() {
  createCanvas (600, 600);
  backgroundSprite = createSprite (300, 300);
  backgroundSprite.addImage(backgroundImg);

  Eblanco = new Group();
  Enegro = new Group();



rey1A = createSprite(330, 528, 20, 20);
rey1A.addImage(reyBlancoImg);
rey1A.scale = 0.12;
Eblanco.add(rey1A);

rey1B = createSprite(330, 73, 20, 20);
rey1B.addImage(reyNegroImg);
rey1B.scale = 0.12;
Enegro.add(rey1B);

reyna1A = createSprite(265,528,20,20);
reyna1A.addImage(reynaBlancaImg);
reyna1A.scale = 0.12;
Eblanco.add(reyna1A);

reyna1B = createSprite(265, 73, 20, 20);
reyna1B.addImage(reynaNegraImg);
reyna1B.scale = 0.12;
Enegro.add(reyna1B);

alfil1A = createSprite(200, 528, 20, 20);
alfil1A.addImage(alfilBlancoImg);
alfil1A.scale = 0.12;
Eblanco.add(alfil1A);

alfil2A = createSprite(395, 528, 20, 20);
alfil2A.addImage(alfilBlancoImg);
alfil2A.scale = 0.12;
Enegro.add(alfil2A);

alfil1B = createSprite(200, 73, 20, 20);
alfil1B.addImage(alfilNegroImg);
alfil1B.scale = 0.12;
Enegro.add(alfil1B);

alfil2B = createSprite(395, 73, 20, 20);
alfil2B.addImage(alfilNegroImg);
alfil2B.scale = 0.12;
Enegro.add(alfil2B);


torre1A = createSprite(70, 528, 20, 20);
torre1A.addImage(torreBlancaImg);
torre1A.scale = 0.12;
Eblanco.add(torre1A);

torre2A = createSprite(525, 528, 20, 20);
torre2A.addImage(torreBlancaImg);
torre2A.scale = 0.12;
Eblanco.add(torre2A);

torre1B = createSprite(70, 73, 20, 20);
torre1B.addImage(torreNegraImg);
torre1B.scale = 0.12;
Enegro.add(torre1B);

torre2B = createSprite(525, 73, 20, 20);
torre2B.addImage(torreNegraImg);
torre2B.scale = 0.12;
Enegro.add(torre2B);

caballo1A = createSprite(135, 528, 20, 20);
caballo1A.addImage(caballoBlancoImg);
caballo1A.scale = 0.12;
Eblanco.add(caballo1A);

caballo2A = createSprite(460, 528, 20, 20);
caballo2A.addImage(caballoBlancoImg);
caballo2A.scale = 0.12;
Eblanco.add(caballo2A);

caballo1B = createSprite(135, 73, 0, 20);
caballo1B.addImage(caballoNegroImg);
caballo1B.scale = 0.12;
Enegro.add(caballo1B);

caballo2B = createSprite(460, 73, 20, 20);
caballo2B.addImage(caballoNegroImg);
caballo2B.scale = 0.12;
Enegro.add(caballo2B);

peon1A = createSprite(70, 463, 20, 20);
peon1A.addImage(peonBlancoImg);
peon1A.scale = 0.9;
Eblanco.add(peon1A);

peon2A = createSprite(135, 463, 20, 20);
peon2A.addImage(peonBlancoImg);
peon2A.scale = 0.9;
Eblanco.add(peon2A);

peon3A = createSprite(200, 463, 20, 20);
peon3A.addImage(peonBlancoImg);
peon3A.scale = 0.9;
Eblanco.add(peon3A);

peon4A = createSprite(265, 463, 20, 20);
peon4A.addImage(peonBlancoImg);
peon4A.scale = 0.9;
Eblanco.add(peon4A);

peon5A = createSprite(330, 463, 20, 20);
peon5A.addImage(peonBlancoImg);
peon5A.scale = 0.9;
Eblanco.add(peon5A);

peon6A = createSprite(395, 20, 20);
peon6A.addImage(peonBlancoImg);
peon6A.scale = 0.9;
Eblanco.add(peon6A);

peon7A = createSprite(460, 463, 20, 20);
peon7A.addImage(peonBlancoImg);
peon7A.scale = 0.9;
Eblanco.add(peon7A);

peon8A = createSprite(525, 463, 20, 20);
peon8A.addImage(peonBlancoImg);
peon8A.scale = 0.9;
Eblanco.add(peon8A);

peon1B = createSprite(70, 138, 20, 20);
peon1B.addImage(peonNegroImg);
Enegro.add(peon1B);
peon1B.scale = 0.9;

peon2B = createSprite(135, 138, 20, 20);
peon2B.addImage(peonNegroImg);
peon2B.scale = 0.9;
Enegro.add(peon2B);

peon3B = createSprite(200, 138, 20, 20);
peon3B.addImage(peonNegroImg);
peon3B.scale = 0.9;
Enegro.add(peon3B);

peon4B = createSprite(265, 138, 20, 20);
peon4B.addImage(peonNegroImg);
peon4B.scale = 0.9;
Enegro.add(peon4B);

peon5B = createSprite(330, 138, 20, 20);
peon5B.addImage(peonNegroImg);
peon5B.scale = 0.9;
Enegro.add(peon5B);

peon6B = createSprite(395, 138, 20, 20);
peon6B.addImage(peonNegroImg);
peon6B.scale = 0.9;
Enegro.add(peon6B);

peon7B = createSprite(460, 138, 20, 20);
peon7B.addImage(peonNegroImg);
peon7B.scale = 0.9;
Enegro.add(peon7B);

peon8B = createSprite(525, 138, 20, 20);
peon8B.addImage(peonNegroImg);
peon8B.scale = 0.9;
Enegro.add(peon8B);




}

function draw() {
  background (180);
  //console.log("x: "+mouseX +"y: " + mouseY)
  
  if(turno === "blancas"){

    if(mousePressedOver(rey1A)){

      
    }

    if(mousePressedOver(reyna1A)){

      
    }

    if(mousePressedOver(alfil1A)){

      
    }

    if(mousePressedOver(alfil2A)){

      
    }

    if(mousePressedOver(caballo1A)){

      
    }
    
    if(mousePressedOver(caballo2A)){

      
    }

    if(mousePressedOver(torre1A)){

      
    }

    if(mousePressedOver(torre2A)){

      
    }

    if(mousePressedOver(peon1A)){

      
    }

    if(mousePressedOver(peon2A)){

      
    }

    if(mousePressedOver(peon3A)){

      
    }

    if(mousePressedOver(peon4A)){

      
    }

    if(mousePressedOver(peon5A)){

      
    }

    if(mousePressedOver(peon6A)){

      
    }

    if(mousePressedOver(peon7A)){

      
    }

    if(mousePressedOver(peon8A)){

      
    }

    Eblanco.overlap(Enegro, function(collector, collected){
      collected.remove();
    })
    

  
  }
  if(turno === "negras"){

    if(mousePressedOver(rey1B)){

      
    }

    if(mousePressedOver(reyna1B)){

      
    }

    if(mousePressedOver(alfil1B)){

      
    }

    if(mousePressedOver(alfil2B)){

      
    }

    if(mousePressedOver(caballo1B)){

      
    }
    
    if(mousePressedOver(caballo2B)){

      
    }

    if(mousePressedOver(torre1B)){

      
    }

    if(mousePressedOver(torre2B)){

      
    }

    if(mousePressedOver(peon1B)){

      
    }

    if(mousePressedOver(peon2B)){

      
    }

    if(mousePressedOver(peon3B)){

      
    }

    if(mousePressedOver(peon4B)){

      
    }

    if(mousePressedOver(peon5B)){

      
    }

    if(mousePressedOver(peon6B)){

      
    }

    if(mousePressedOver(peon7B)){

      
    }

    if(mousePressedOver(peon8B)){

      
    }

    Enegro.overlap(Eblanco, function(collector, collected){
      collected.remove();
    })


  }
  
  drawSprites();

}