var _startX = 0;
var _startY = 0;
var _offsetX = 0;
var _offsetY = 0;
var _dragElement = document.getElementById('portal_frame');
var _isDragging = false;
var _dragThreshold = 5;

document.onmousedown = OnMouseDown;
document.onmouseup = OnMouseUp;

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
});

document.addEventListener('wheel', function(event) {
    console.log(event.deltaY)
    event.preventDefault();
    _offsetX = document.getElementById('portal_frame').offsetLeft;
    _offsetY = document.getElementById('portal_frame').offsetTop;
    _dragElement.style.left = (_offsetX - event.deltaX) + 'px';
    _dragElement.style.top = (_offsetY - event.deltaY) + 'px';
}, {passive: false});