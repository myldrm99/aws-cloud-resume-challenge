$(document).ready(function (e) {
    var $win = $(window);
    var $navbar = $('#header');
    var $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // Resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    });

    // Dark Mode Toggle
    $('#dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
    });
});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'MSc Student',

    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
		"https://5ree5brlgi4qwp3m3urklasmum0jxoar.lambda-url.eu-central-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}
updateCounter();