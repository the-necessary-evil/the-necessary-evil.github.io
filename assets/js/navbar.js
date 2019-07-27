function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.9)";
    document.getElementById("side-nav-button").style.visibility = 'hidden';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("side-nav-button").style.visibility = 'visible';
}