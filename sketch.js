function setup() {
    createCanvas(600, 600);
      background("black");
  }
  
  function draw() {
    
    stroke("darkblue");
    fill("darkblue");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX,mouseY,10,10);
    }
  }
  