
let upload = document.getElementById('upload');
let img = document.getElementById('img');


let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');


let download = document.getElementById('download');
let reset = document.querySelector('.right .footer span');





window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
}

upload.onchange = function(){
    download.style.display = 'block';
    reset.style.display = 'block';

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}




let filters = document.querySelectorAll('.right input');

filters.forEach(filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
    })
})

reset.onclick = function(){
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
    hueRotate.value = '0'
    img.style.filter = 'none'
}

download.onclick = function(){
    download.href = img.src
}




