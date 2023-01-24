let swipe = document.createElement('div');
swipe.id = "swipe"
let nav = document.createElement('div');
nav.classList.add('nav');
tabs = {"Home":"index.html", "Test":"test.html"}
nav.innerHTML = ""
for ([n, src] of Object.entries(tabs)) {
    nav.innerHTML += `
<button class="${window.location.toString().split("/")[window.location.toString().split("/").length - 1] == src ? 'selected' : 'link'}" onclick="route('${src}')">${n}</button>`
}
current = document.body.innerHTML
document.body.innerHTML = ""
document.body.appendChild(nav)
document.body.appendChild(swipe)
document.body.innerHTML += current + `
<footer>
    <small>© ${new Date().getFullYear()} William Choi-Kim. All Rights Reserved.</small></footer>
</footer>`

setTimeout(() => {
    document.getElementById("swipe").style.transition = "2s"
    document.getElementById("swipe").style.left = "-100vw"
}, 1)

function route(but) {
    document.getElementById("swipe").style.left = "0"
    setTimeout(() => {
        window.location.href = but
    }, 2500)
}