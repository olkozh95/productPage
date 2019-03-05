(function() {
    const navElems = document.querySelectorAll(".header__nav-item");
    const logoEl = document.getElementById("header-img");

    const feature = document.getElementById("features");
    const showOff = document.getElementById("how-works");
    const pricing = document.getElementById("pricing");

    navElems[0].addEventListener("click", featureScroll);
    navElems[1].addEventListener("click", showOffScroll);
    navElems[2].addEventListener("click", pricingScroll);
    logoEl.addEventListener("click", scrollPage);

    function featureScroll(e) {
        e.preventDefault();
        feature.scrollIntoView({block: "center", behavior: "smooth"});
    }

    function showOffScroll(e) {
        e.preventDefault();
        showOff.scrollIntoView({block: "center", behavior: "smooth"});
    }

    function pricingScroll(e) {
        e.preventDefault();
        pricing.scrollIntoView({block: "center", behavior: "smooth"});
    }

    function scrollPage(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    }

})();