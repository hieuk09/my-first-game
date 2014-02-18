#pragma strict

function Start () {
}

function Update () {
}

function OnMouseDown() {
	var ball = gameObject.rigidbody2D;
	if (ball.IsSleeping()) {
		ball.WakeUp();
	} else {
		ball.Sleep();
	}
}