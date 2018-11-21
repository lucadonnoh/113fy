function _113fy()
{
	var link = document.getElementById("inlink").value;
	var splittedbyscores = link.split("-");
	var lastscore = splittedbyscores[splittedbyscores.length - 1];
	var splittedbydots = lastscore.split(".");
    var code = splittedbydots[0];
    
    var newlink = link + "?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_113&utm_campaign=fb01a_"+code+"_113";
    
    document.getElementById("outlink").value = newlink;

    //code ends here

    displayNone();
}

function ToClipboard() {
    
    /* Get the text field */
    var copyText = document.getElementById("outlink");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");

    displayBlock();
  }

function toggleDisplay() {
    var x = document.getElementById("success");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function displayBlock() {
    var x = document.getElementById("success");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function displayNone() {
    var x = document.getElementById("success");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}