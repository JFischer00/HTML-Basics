var divs = [
    "errorFirstName",
    "errorLastName",
    "errorEmail"
];

function validate() {
    var inputs = [
        document.getElementsByName("firstName")[0].value,
        document.getElementsByName("lastName")[0].value,
        document.getElementsByName("email")[0].value
    ];

    var errors = [
        "Please enter your first name!",
        "Please enter your last name!",
        "Please enter your email!"
    ];

    for (var i = 0; i < inputs.length; i++) {
        var message = errors[i];
        var entry = divs[i];

        if (inputs[i] == "")
            displayError(entry, message);
        else if (i == 2) {
            var atpos = inputs[i].indexOf('@');
            var dotpos = inputs[i].lastIndexOf('.');

            if (atpos < 1 || dotpos < (atpos + 2) || dotpos >= inputs[i].length)
                displayError(entry, "Please enter a valid email address!");
            else
                displayOK(entry);
        }
        else
            displayOK(entry);
    }
}

function finalValidate() {
    var errorExists = false;
    
    for (var i = 0; i < divs.length; i++) {
        if (document.getElementById(divs[i]).firstChild.innerHTML != "OK!")
            errorExists = true;
    }

    if (!errorExists)
        document.getElementById("errorFinal").innerHTML = "<span style='color:green'>All data is correct!</span>";
    else
        displayError("errorFinal", "Please review the data you entered!");
}

function displayError(id, message) {
    document.getElementById(id).innerHTML = "<span style='color:red'>" + message + "</span>";
}

function displayOK(id) {
    document.getElementById(id).innerHTML = "<span style='color:green'>OK!</span>";
}

document.getElementById("infoForm").addEventListener('submit', function(e) {
    e.preventDefault();
});