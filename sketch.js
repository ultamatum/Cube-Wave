let angle = 0;
let w = 30;
let camRange = 800;
let maxD;

function setup()
{
    createCanvas(900, 900, WEBGL);
    maxD = dist(0, 0, 200, 200);
}

function draw()
{
    background(40, 40, 52);
    ortho(-camRange, camRange, -camRange, camRange, 0, 6000);

    directionalLight(255, 255, 255, -0.25766, 0, -0.9662);
    ambientLight(60, 60, 60);
    translate(0, 0, -100);
    rotateX(-QUARTER_PI);
    rotateY(-QUARTER_PI);

    for (let z = 0; z < height; z += w)
    {
        for (let x = 0; x < width; x += w)
        {
            push();
            {
                let d = dist(x, z, width / 2, height / 2);
                let offset = map(d, 0, maxD, -HALF_PI, HALF_PI);
                let a = angle + offset;
                let h = map(sin(a), -1, 1, 150, 600);

                noStroke();
                ambientMaterial(227, 99, 135);
                translate(x - width / 2, 0, z - height / 2);
                box(w, h, w);
            }
            pop();
        }
    }

    angle -= 0.1;
}