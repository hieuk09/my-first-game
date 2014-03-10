#pragma strict

function OnMouseDown() {
  StaticVars.isLoaded = true;
  Application.LoadLevel(Application.loadedLevel);
}

function OnLevelWasLoaded() {
  if (StaticVars.isLoaded) {
    var saveFile = new SaveFile();
    saveFile.load();
  }
}