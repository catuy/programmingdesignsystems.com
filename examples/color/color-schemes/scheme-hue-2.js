function fillHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function setup() {
  createCanvas(600, 460);
  noStroke();
  fillHsluv(160, 100, 50);
  rect(0, 0, width, height);
  fillHsluv(230, 100, 50);
  rect(145, 95, 375, 200);
  fillHsluv(300, 100, 50);
  rect(85, 155, 375, 200);
  noLoop();
}
