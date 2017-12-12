
$(function() {
   document.onkeypress = function(event){
       event = event || window.event;
       if(event.keyCode == 13) {
           $("#ok")[0].click();
       }
   }
});


function setPassword() {
    var username = $('#username').val();
    var password = $('#password').val();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem("log", "false");
}
function check_pass() {
    var saved_pass = localStorage.getItem('password');
    var password = $('#pass').val();
    if(password !== saved_pass){
        localStorage.setItem("log", "false");
        $('#ok').attr("href", location.href);
    } else {
        localStorage.setItem("log", "true");
    }
}