const app = {
    pages: [],
    show: new Event('show'),
    init: function () {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg) => {
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.nav').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        window.addEventListener('popstate', app.poppin);
    },
    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
}

function base64() {
    var resultado = document.getElementById('base64').value;
    var base64 = window.btoa(unescape(encodeURIComponent(resultado)))
    alert(`String CODIFICADA em Base64 é '${base64}'`);

    var base64Descodi = window.atob(unescape(encodeURIComponent(base64)))
    alert(`String DESCODIFICADA em Base64 é '${base64Descodi}'`);
}
function upperCase() {
    var resultado = document.getElementById('upperCase').value;
    alert(`String convertida em UpperCase é '${resultado.toUpperCase()}'`);
}
function capitalCase() {
    var resultado = document.getElementById('capitalCase').value;
    var resultado2;
    resultado2 = resultado.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
    alert(`String convertida em CapitalCase é '${resultado2}'`);
}
function lowerCase() {
    var resultado = document.getElementById('lowerCase').value;
    alert(`String convertida em LowerCase é '${resultado.toLowerCase()}'`);
}
function properCase() {
    var resultado = document.getElementById('properCase').value;
    alert(`String convertida em ProperCase é '${resultado.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); })}'`);
}
document.addEventListener('DOMContentLoaded', app.init);