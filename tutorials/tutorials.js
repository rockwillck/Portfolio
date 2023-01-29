var tutorials = {"Intro to HTML Canvas":["intro-to-html-canvas.html", ["javascript", "canvas", "games", "html"], 0]}
const difficulties = ["Beginner", "Intermediate", "Expert"]

function registerTut(box, name, src) {
    item = document.createElement("button")
    item.className = "tutorialItem"
    item.href = src[0]
    item.innerText = name
    item.addEventListener("click", (e) => {
        route(src[0])
    })
    box.appendChild(item)
}

if (file == "tutorials/tutorials.html") {
    for ([n, src] of Object.entries(tutorials)) {
        box = document.getElementById("tutorialList")
        registerTut(box, n, src)
    }
}

function rerun(search) {
    box = document.getElementById("tutorialList")
    while (box.hasChildNodes()) {
        box.removeChild(box.lastChild);
    }
    for ([n, src] of Object.entries(tutorials)) {
        match = true
        search.split(" ").forEach((searchKey) => {
            if (!(n + src[1].join("")).toLowerCase().includes(searchKey.toLowerCase()) && searchKey != "") {
                match = false
            }
        })
        if (match) {
            registerTut(box, n, src)
        }
    }
}

for (i=0;i<document.getElementsByClassName("code").length;i++) {
    block = document.getElementsByClassName("code")[i]
    block.innerText = block.innerHTML
}