$(document).ready(function () {
    $('img#img').click(function (toggle) {
        $('img#img').hide();
        $('p#p').show();
    });
    $('p#p').click(function (toggle) {
        $('p#p').hide();
        $('img#img').show();
    });

    $('img#img1').click(function (toggle) {
        $('img#img1').hide();
        $('p#p1').show();
    });
    $('p#p1').click(function (toggle) {
        $('p#p1').hide();
        $('img#img1').show();
    });
    $('img#img2').click(function (toggle) {
        $('img#img2').hide();
        $('p#p2').show();
    });
    $('p#p2').click(function (toggle) {
        $('p#p2').hide();
        $('img#img2').show();
    });
});

document.forms['forms'].addEventListener('submit', function (e) {
    e.preventDefault();
});
function checkEmpty() {
    var name = document.forms['forms'].elements[0].value;
    var email = document.forms['forms'].elements[1].value;
    var message = document.forms['forms'].elements[2].value;

    if (name == "" && email == "") {
        alert('please enter your details');
        return 0;
    }
    else {
        if (name == "") {
            alert("please enter your name!");
        }
        else if (email == "") {
            alert("please enter your email!");
        }
    }
    if ((name !== "" && email != "" && text == "") || (name != "" && email != "" && text != "")) {
        alert("Dear " + name + " your message was received successfully.");
        document.getElementById('results').innerHTML = "Dear " + name + " your message was received successfully you will be contacted soon. Thank you.";
    }
}