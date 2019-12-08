 $(document).ready(function(){
 $('img#img').click(function(toggle){
    $('p#p').toggle();
  });
  $('img#img1').click(function(toggle){
     $('p#p1').toggle();
 });
 $('img#img2').click(function(toggle){
     $('p#p2').toggle();
});
});
// function _f() {
//     return document.forms['forms'];
// }
// _f()['btn'].addEventListener('click', function (f) {
//     f.preventDefault();
//     checkEmpty(name, email, text);
// });
// function checkEmpty(name, email, text) {
//     name = (document.forms[0][0]).value;
//     email = (document.forms[0][1]).value;
//     text = (document.forms[0][2]).value;
//     if (name == "" || email == "" || text == ""){
//         alert('please enter your details')
//     }
// else if (name == "") {
//         alert("please enter your name");
//         return 0;
//     }




// }