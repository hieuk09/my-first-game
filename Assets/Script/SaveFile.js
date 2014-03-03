#pragma strict
import System.IO;

var path = 'save.txt'

class SaveFile {
    function save() {
        var sw : StreamWriter = new StreamWriter(path);
        sw.WriteLine("Line to write");
        sw.WriteLine("Another Line");
        sw.Flush();
        sw.Close();    
    };

    function load() {
        sr = new File.OpenText(path);
        input = "";

        while (true) {
            input = sr.ReadLine();
            if (input == null) { break; }
        }
        sr.Close();
    };
}