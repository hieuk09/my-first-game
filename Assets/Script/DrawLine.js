#pragma strict

var lineRenderer: LineRenderer;
var startPos: Vector3;
var endPos: Vector3;
var state: int;
var STATES = {
	'start': 1,
	'end': 2,
	'finish': 3
};

function Start () {
	var lineObject = new GameObject("Line");
	lineRenderer = lineObject.AddComponent(LineRenderer);
	lineRenderer.SetColors(Color.yellow, Color.red);
	lineRenderer.SetWidth(0.2, 0.2);
	state = STATES['start'];
}

function Update () {	
	
}

function OnMouseDown() {	
	var mousePos = Input.mousePosition;
	mousePos.z = 1.0f;

	switch (state) {
		case STATES['start']:
			endPos = Camera.main.ScreenToWorldPoint(mousePos);
			lineRenderer.SetPosition(1, endPos);
			state = STATES['end'];
			break;
		case STATES['end']:
			lineRenderer.SetVertexCount(0);
			state = STATES['finish'];
			break;
		case STATES['finish']:
			lineRenderer.SetVertexCount(2);
			startPos = Camera.main.ScreenToWorldPoint(mousePos);
			lineRenderer.SetPosition(0, startPos);
			state = STATES['start'];
			break;
	}
}

function OnMouseUp() {
}