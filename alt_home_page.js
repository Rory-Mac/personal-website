var _startX = 0;
var _startY = 0;
var _offsetX = 0;			
var _offsetY = 0;
var _dragElement;

document.onmousedown = OnMouseDown;
document.onmouseup = OnMouseUp;

function OnMouseDown(event){
	document.onmousemove = OnMouseMove;
    _startX = event.clientX;
	_startY = event.clientY;
	_offsetX = document.getElementById('alt_div').offsetLeft;
	_offsetY = document.getElementById('alt_div').offsetTop;
	_dragElement = document.getElementById('alt_div');
}

function OnMouseMove(event){
	_dragElement.style.left = (_offsetX + event.clientX - _startX) + 'px';
	_dragElement.style.top = (_offsetY + event.clientY - _startY) + 'px';
}

function OnMouseUp(event){
	document.onmousemove = null;
	_dragElement=null;
}
