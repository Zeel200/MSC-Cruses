let toggled = false;


function toggleUnToggle() {
    var navItem = document.querySelector("nav.navItems");

    if (toggled === true) {
        // navItem.style.display = 'none';
        navItem.classList.add("animationClass1");
        navItem.classList.remove("animationClass2");


        setTimeout(function () {

            navItem.style.height = "0px";

            toggled = false;

        }, 500);
    } else {
        toggled = true;
        setTimeout(function () {

            navItem.style.height = "220px";

            toggled = true;

        }, 490);
        navItem.classList.add("animationClass2");
        navItem.classList.remove("animationClass1");
       
    }
}


window.addEventListener('resize', function() {
    if(window.innerWidth >= 955){
        var navItem = document.querySelector("nav.navItems");
        navItem.classList.remove("animationClass2");

        navItem.style = "";

    }

});