let swipe = document.createElement('div');
swipe.id = "swipe"
let nav = document.createElement('div');
nav.classList.add('nav');

tabs = {"Home":"index.html", "Projects":"projects.html", "Blog":"blog/blog.html", "Tutorials":"tutorials/tutorials.html"}
nav.innerHTML = ""
matched = false
let headRoute = window.location.href.split("/").slice(0, 3).join("/")
let file = window.location.href.split("/").slice(3, window.location.href.split("/").length).join("/")
for ([n, src] of Object.entries(tabs)) {
    nav.innerHTML += `
<button class="${file == src ? 'selected' : 'link'}" onclick="route('${headRoute + "/" + src}')">${n}</button>`
}
title = document.createElement("title")
title.innerText = document.getElementsByTagName("h1")[0].innerText
document.head.appendChild(title)
matched = true
nav.innerHTML += `<img class='options ${localStorage.getItem('animation') == 'true' ? 'selected' : 'link'}' src='${headRoute + `/static/${localStorage.getItem('animation') == 'true' ? "on.svg" : "off.svg"}`}' onclick="toggleSwipe(this)"></img>`
function toggleSwipe(img) {
    localStorage.setItem('animation', localStorage.getItem('animation') == 'true' ? 'false' : 'true')
    img.src = localStorage.getItem('animation') == 'true' ? headRoute + "/static/on.svg" : headRoute + "/static/off.svg"
    img.className = `options ${localStorage.getItem('animation') == 'true' ? 'selected' : 'link'}`
}
if (file == "") {
    window.location.replace("index.html")
}


current = document.body.innerHTML
document.body.innerHTML = ""
document.body.appendChild(nav)
document.body.innerHTML += current + `
<footer>
    <small>© ${new Date().getFullYear()} William Choi-Kim. All Rights Reserved.</small>
</footer>`

if (localStorage.getItem("animation") != null) {
        document.body.appendChild(swipe)
        setTimeout(() => {
            document.getElementById("swipe").style.transition = `${localStorage.getItem("animation") == "true" ? 1 : 0}s`
            document.getElementById("swipe").style.left = "-100vw"
        }, 1)
} else {
    localStorage.setItem("animation", "true")
}

function route(but) {
    document.getElementById("swipe").style.transition = `${localStorage.getItem("animation") == "true" ? 1 : 0}s`
    if (localStorage.getItem("animation") == "true") {
        document.getElementById("swipe").style.left = "0"
        setTimeout(() => {
            window.location.href = but
        }, 1200)
    } else {
        window.location.href = but
    }
}