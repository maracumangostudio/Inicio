const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
if (window.location.pathname.endsWith("index.html")) {
    window.location.replace("/");
}
fetch("./assets/components/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });