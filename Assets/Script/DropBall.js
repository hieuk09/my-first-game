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

function OnCollisionEnter2D(collision: Collision2D) {
	var audioSource: AudioSource = collision.gameObject.GetComponent('AudioSource');
	audioSource.PlayOneShot(audioSource.clip);
}