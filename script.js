function upDate(previewPic) {
    console.log('Event triggered.');
    console.log('Alt:', previewPic.alt);
    console.log('Source:', previewPic.src);

    // Update text
    document.getElementById('image').innerText = previewPic.alt;

    // Change background image
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    // Reset background image and text
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerText = "Hover over an image below to display here.";
}
