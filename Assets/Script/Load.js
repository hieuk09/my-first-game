#pragma strict

function OnMouseDown() {
  Application.LoadLevel(Application.loadedLevel);
}

function OnLevelWasLoaded() {
  var saveFile = new SaveFile();
  saveFile.load();
}