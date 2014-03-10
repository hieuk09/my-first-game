#pragma strict
import System.IO;

var path = 'save.txt';

class SaveFile {
	function save() {
		var sw : StreamWriter = new StreamWriter(path);
		var objects = GameObject.FindObjectsOfType(GameObject);
		for (var i = 0; i < objects.length; i++) {
			if (objects[i].activeInHierarchy && objects[i].name == 'Cube') {
				var transform = objects[i].transform;
				sw.WriteLine(transform.position);
				sw.WriteLine(transform.localScale);
				sw.WriteLine(transform.localRotation);
			}
		}
		sw.Flush();
		sw.Close();
	};

	function load() {
		var sr = new File.OpenText(path);
		var input = "";
		var maxLength = 20;
		var allSound = 260;

		while (true) {
			input = sr.ReadLine();
      if (input == null) { break; }
			var position = stringToVector(input);
      input = sr.ReadLine();
			var localScale = stringToVector(input);
      input = sr.ReadLine();
			var localRotation = stringToQuaternion(input);


			var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
			cube.DestroyImmediate(cube.collider);
			cube.AddComponent('BoxCollider2D');
			cube.transform.position = position;
			cube.transform.localScale = localScale;
			cube.transform.localRotation = localRotation;
			var soundNumber = Mathf.Floor((localScale.z / maxLength) * allSound);

			if (soundNumber > allSound) {
				soundNumber = allSound;
			} else if (soundNumber <= 0) {
				soundNumber = 1;
			}

			var audioSource:AudioSource = cube.AddComponent('AudioSource');
			audioSource.clip = Resources.Load('Sound/Piano(' + soundNumber.ToString() + ')');
		}
		sr.Close();
	};

	function stringToVector(string: String) {
  	var newString = this.removeParentheses(string);
  	var numberStrings = newString.Split(','[0]);

  	var x = System.Convert.ToDecimal(numberStrings[0]);
  	var y = System.Convert.ToDecimal(numberStrings[1]);
  	var z = System.Convert.ToDecimal(numberStrings[2]);
  	var returnvector3 = Vector3(x, y, z);

  	return returnvector3;
	};

  function stringToQuaternion(string: String) {
  	var newString = this.removeParentheses(string);
  	var numberStrings = newString.Split(','[0]);

  	var x = System.Convert.ToDecimal(numberStrings[0]);
  	var y = System.Convert.ToDecimal(numberStrings[1]);
  	var z = System.Convert.ToDecimal(numberStrings[2]);
  	var w = System.Convert.ToDecimal(numberStrings[3]);
  	var returnQuarternion = Quaternion(x, y, z, w);

  	return returnQuarternion;
  };

  function removeParentheses(string: String) {
	 return string.Replace(')', '').Replace('(', '');
  }
}