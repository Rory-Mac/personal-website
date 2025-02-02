var _startX = 0;
var _startY = 0;
var _isDragging = false;
var _dragThreshold = 5;
let scaleFactor = 1;

document.onmousedown = OnMouseDown;
document.onmouseup = OnMouseUp;

document.addEventListener('DOMContentLoaded', function() {
    var _dragElement = document.getElementById('portal_frame');
    _dragElement.style.zoom = '100%';
});

function OnMouseDown(event) {
    event.preventDefault();

    _startX = event.clientX;
    _startY = event.clientY;
    _offsetX = document.getElementById('portal_frame').offsetLeft;
    _offsetY = document.getElementById('portal_frame').offsetTop;
    _isDragging = false;

    document.onmousemove = OnMouseMove;
}

function OnMouseMove(event) {
    var moveX = event.clientX - _startX;
    var moveY = event.clientY - _startY;
    var scale = (100 / parseFloat(_dragElement.style.zoom))
    if (Math.abs(moveX) > _dragThreshold || Math.abs(moveY) > _dragThreshold) {
        _isDragging = true;
        _dragElement.style.left = (_offsetX + scale * moveX) + 'px';
        _dragElement.style.top = (_offsetY + scale * moveY) + 'px';
    }
}

function OnMouseUp() {
    document.onmousemove = null;
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('click', function(event) {
    if (_isDragging) {
        event.preventDefault();
    }
    _isDragging = false;
}, {passive: false});

document.addEventListener('wheel', function(event) {
    event.preventDefault();    
    // handle touchpad versus scroll wheel pinch/zoom
    let scale;
    if (event.ctrlKey) {
        scale = 1 - event.deltaY / 100;
    } else {
        scale = 1 - event.deltaY / 1000;
    }
    _dragElement.style.zoom = (parseFloat(_dragElement.style.zoom) * scale) + '%';

}, {passive: false});