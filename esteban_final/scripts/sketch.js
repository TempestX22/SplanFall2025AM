new p5((p) => {
  let cnv;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let pulse = 0;
  const PULSE_MAX = 24;
  let mouseImg = null;
  const IMG_SIZE = 32;

  function hideNativeCursor() {
    document.documentElement.style.cursor = 'none';
  }

  p.preload = () => {
    // load mouse image relative to the page (images/mouse.png)
    mouseImg = p.loadImage('images/mouse.png');
  };

  p.setup = () => {
    hideNativeCursor();

    cnv = p.createCanvas(window.innerWidth, window.innerHeight).parent(document.body);
    cnv.position(0, 0);
    cnv.style('position', 'fixed');
    cnv.style('top', '0px');
    cnv.style('left', '0px');
    cnv.style('z-index', '9999');
    cnv.style('pointer-events', 'none');

    p.pixelDensity(1);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(28);
    p.noCursor();

    p.imageMode(p.CENTER);

    window.addEventListener('pointermove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    window.addEventListener('pointerdown', (e) => {
      mx = e.clientX;
      my = e.clientY;
      pulse = PULSE_MAX;
    });

    window.addEventListener('resize', () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    });
  };

  p.draw = () => {
    p.clear();

    p.push();
    p.translate(mx, my);

    if (pulse > 0) {
      const r = p.map(pulse, 0, PULSE_MAX, 8, 96);
      p.noFill();
      p.stroke(255, 0, 0, p.map(pulse, 0, PULSE_MAX, 200, 40));
      p.strokeWeight(2);
      p.ellipse(0, 0, r, r);
      pulse--;
    }

    // draw the loaded image as the pointer; fallback to a red heart if image not loaded
    if (mouseImg && mouseImg.width > 0) {
      p.image(mouseImg, 0, 0, IMG_SIZE, IMG_SIZE);
    } else {
      p.noStroke();
      p.fill(255, 0, 0);
      p.textSize(32);
      p.text('🕹', 0, 0);
    }

    p.pop();
  };
});