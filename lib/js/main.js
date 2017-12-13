
function submit(document)
{
    var xhttp = new XMLHttpRequest(document);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "http://localhost/projekte/edu/js/18simpleloginform/lib/js/req.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("login="+document.getElementById('10').value+"&pass="+document.getElementById('20').value);
}
