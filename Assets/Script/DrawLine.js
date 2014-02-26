#pragma strict

var startPos: Vector3;
var endPos: Vector3;
var cube : GameObject;
var DEFAULT_Z = 10.0f;

function OnMouseDown() {
	var mousePos = Input.mousePosition;
	mousePos.z = DEFAULT_Z;
	startPos = Camera.main.ScreenToWorldPoint(mousePos);	
	cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube.Destroy(cube.GetComponent('BoxCollider'));	
}

function OnMouseDrag() {
	var mousePos = Input.mousePosition;
	mousePos.z = DEFAULT_Z;	
	endPos = Camera.main.ScreenToWorldPoint(mousePos);
	
	cube.transform.position = (startPos + endPos) / 2;
	var between = endPos - startPos;
	var distance = between.magnitude;
	cube.transform.localScale = Vector3(1, 0.1, distance);
	cube.transform.LookAt(endPos);	
}

function OnMouseUp() {
	cube.AddComponent('Rigidbody2D');	
	cube.AddComponent('BoxCollider2D');
	var rigidbody2D = cube.rigidbody2D;
	rigidbody2D.gravityScale = 0;
}