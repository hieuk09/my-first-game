#pragma strict

function OnMouseDown() {
  StaticVars.isLoaded = false;
  Application.LoadLevel(Application.loadedLevel);
}