window.onload = function () {
    let moveText = document.querySelector('#moveText');
    let pos = {
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5,
        x: 50,
        y: 50
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    function setRed() {
        const imageData = ctx.getImageData(0, 0, width, height);

        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = 255;
            imageData.data[i + 3] = Math.random() > 0.5 ? 0 : 255;
        }

        // 4. Paint the modified pixel data back onto the canvas
        ctx.putImageData(imageData, 0, 0);
    }

    setInterval(() => {
        setRed();
    }, 100);

    function anim() {

        pos.x += pos.dx;
        pos.y += pos.dy;

        if (pos.x > (window.innerWidth - moveText.offsetWidth) || pos.x < 0) {
            pos.dx *= -1;
        }

        if (pos.y > (window.innerHeight - moveText.offsetHeight) || pos.y < 0) {
            pos.dy *= -1;
        }


        moveText.style.left = `${pos.x}px`;
        moveText.style.top = `${pos.y}px`;

        window.requestAnimationFrame(anim);
    }


    window.requestAnimationFrame(anim);
}