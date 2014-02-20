#pragma strict

var startPos: Vector3;
var endPos: Vector3;
var lineRenderer: LineRenderer;

function Start () {	
}

function Update () {

}

function OnMouseDown() {
	var mousePos = Input.mousePosition;
	mousePos.z = 1.0f;
	var lineObject = new GameObject("Line");
	lineRenderer = lineObject.AddComponent(LineRenderer);
	lineRenderer.SetColors(Color.yellow, Color.red);
	lineRenderer.SetWidth(0.2, 0.2);
	startPos = Camera.main.ScreenToWorldPoint(mousePos);
}

function OnMouseDrag() {
	var mousePos = Input.mousePosition;
	mousePos.z = 1.0f;	
	lineRenderer.SetVertexCount(2);
	lineRenderer.SetPosition(0, startPos);		
	endPos = Camera.main.ScreenToWorldPoint(mousePos);
	lineRenderer.SetPosition(1, endPos);
}