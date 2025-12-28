setTimeout(function() {
    document.getElementById("spinner").classList.remove("spinner");
    document.getElementById("spinner").innerHTML = '<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>';
    setTimeout(function() {
        document.getElementById("status").innerHTML = "Connection verified! Redirecting...";
    }, 1000)
}, 3000);
