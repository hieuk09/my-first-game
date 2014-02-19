#pragma strict

var startPos: Vector3;
var endPos: Vector3;
var state: int;
var STATES = {
	'start': 1,
	'end': 2,
	'finish': 3
};

function Start () {	
	state = STATES['start'];
}

function Update () {

}

function OnMouseDown() {
	var mousePos = Input.mousePosition;
	mousePos.z = 1.0f;

	switch (state) {
		case STATES['start']:
			startPos = Camera.main.ScreenToWorldPoint(mousePos);
	
			state = STATES['end'];
			break;
		case STATES['end']:
			var lineObject = new GameObject("Line");
			var lineRenderer = lineObject.AddComponent(LineRenderer);
			lineRenderer.SetColors(Color.yellow, Color.red);
			lineRenderer.SetWidth(0.2, 0.2);
			lineRenderer.SetVertexCount(2);
			lineRenderer.SetPosition(0, startPos);		
			endPos = Camera.main.ScreenToWorldPoint(mousePos);
			lineRenderer.SetPosition(1, endPos);
			state = STATES['start'];
			break;
	}
}

function OnMouseUp() {
}