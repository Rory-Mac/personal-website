var _startX = 0;
var _startY = 0;
var _isDragging = false;
var _dragThreshold = 5;

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
    if (Math.abs(moveX) > _dragThreshold || Math.abs(moveY) > _dragThreshold) {
        _isDragging = true;
        _dragElement.style.left = (_offsetX + moveX) + 'px';
        _dragElement.style.top = (_offsetY + moveY) + 'px';
    }
}

function OnMouseUp() {
    document.onmousemove = null;
}

document.addEventListener('click', function(event) {
    if (_isDragging) {
        event.preventDefault();
    }
    _isDragging = false;
}, {passive: false});

document.addEventListener('wheel', function(event) {
    event.preventDefault();
    // indicates pinch/zoom motion
    if (event.ctrlKey) {
        scale = 1 - (event.deltaY / 100);
        _dragElement.style.zoom = (parseFloat(_dragElement.style.zoom) * scale) + '%';
        _dragElement.style.left = (parseFloat(_dragElement.style.left) - (scale * event.clientX - event.clientX)) + 'px';
        _dragElement.style.top = (parseFloat(_dragElement.style.top) - (scale * event.clientY - event.clientY)) + 'px';
    }
    // else indicates scrolling motion
    _dragElement.style.left = (parseFloat(_dragElement.style.left) - event.deltaX) + 'px';
    _dragElement.style.top = (parseFloat(_dragElement.style.top) - event.deltaY) + 'px';
}, {passive: false});