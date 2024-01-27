const spacingInput = document.getElementById("spacing")
const blurInput = document.getElementById("blur")
const baseInput = document.getElementById("base")

// function handleSpacing(e) {
//     console.log(e.target.id)
//     document.body.style.setProperty('--spacing', `${e.target.value}px`)
// }

// function handleBlur(e) {
//     console.log(e)
//     document.body.style.setProperty('--blur', `${e.target.value}px`)
// }

// function handleBase(e) {
//     console.log(e)
//     document.body.style.setProperty('--base-color', e.target.value)
// }

function handleChange(e) {
    id = e.target.id
    value = e.target.value
    if (id === "base") {
        document.body.style.setProperty(`--${id}`, value)
    } else {
        document.body.style.setProperty(`--${id}`, `${value}px`)
    }
}

spacingInput.addEventListener("input", (e) => handleChange(e))
blurInput.addEventListener("input", (e) => handleChange(e))
baseInput.addEventListener("input", (e) => handleChange(e))