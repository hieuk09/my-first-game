#pragma strict

var startPos: Vector3;
var endPos: Vector3;
var cube: GameObject;
var audioSource: AudioSource;
var DEFAULT_Z = 12.0f;
var numberOfLines = 0;
var maxLength = 20;
var allSound = 260;

function OnMouseDown() {
	var mousePos = Input.mousePosition;
	mousePos.z = DEFAULT_Z;
	numberOfLines++;
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
	cube.AddComponent('BoxCollider2D');	

	var distance = (endPos - startPos).magnitude;
	var soundNumber = Mathf.Floor((distance / maxLength) * allSound);

	if (soundNumber > allSound) {
		soundNumber = allSound;
	} else if (soundNumber <= 0) {
		soundNumber = 1;
	}

	audioSource = cube.AddComponent('AudioSource');
	audioSource.clip = Resources.Load('Sound/Piano(' + soundNumber.ToString() + ')');
}