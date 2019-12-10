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
    //creating a slide function
    $('img#f1').hover(function () {
        $('#f1').slideToggle('slow');
    });
    $('img#f2').hover(function () {
        $('#f2').slideToggle('slow');
    });
    $('img#f3').hover(function () {
        $('#f3').slideToggle('slow');
    });
    $('img#f4').hover(function () {
        $('#f4').slideToggle('slow');
    });
    $('img#f5').hover(function () {
        $('#f5').toggle('slow');
    });
    $('img#f6').hover(function () {
        $('#f6').toggle('slow');
    });
    $('img#f7').hover(function () {
        $('#f7').toggle('slow');
    });
    $('p#f8').hover(function () {
        $('#f8').slideToggle('slow');
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