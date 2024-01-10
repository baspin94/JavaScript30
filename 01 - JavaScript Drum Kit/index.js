document.addEventListener("keydown", handlePress)
document.addEventListener("keyup", handlePress)
document.addEventListener("mousedown", handleClick)
document.addEventListener("mouseup", handleClick)

// const keys = document.querySelectorAll(".key")
// keys.forEach(key => key.addEventListener("transitionend", removeTransition))

function handlePress(event) {
    const code = event.keyCode.toString()
    let elements = document.querySelectorAll(`[data-key='${code}']`)
    if (elements.length === 0) return

    if (event.type === "keydown") {
        elements[0].classList.add('playing')
        elements[1].currentTime = 0
        elements[1].play()
    }

    else elements[0].classList.remove('playing')
}

function handleClick(event) {
    let element, code
    if (event.target.localName === "kbd" || event.target.localName === "span") {
        element = event.target.parentElement
        code = element.attributes['data-key']['value']
    } 
    if (event.target.localName === "div") {
        element = event.target
        code = event.target.attributes['data-key']['value']
    }
    if (!code) return
    
    if (event.type === "mousedown") {
        element.classList.add('playing')
        let audio = document.querySelector(`audio[data-key='${code}']`)
        audio.currentTime = 0
        audio.play()
    }
    else {
        element.classList.remove('playing')
    }
}

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing')
// }