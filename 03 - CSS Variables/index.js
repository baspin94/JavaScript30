function handleChange(e) {
    id = e.target.id
    value = e.target.value
    suffix = e.target.dataset.sizing || '';
    document.body.style.setProperty(`--${id}`, value + suffix)
}

const inputs = document.querySelectorAll(".controls input")
inputs.forEach(input => input.addEventListener("input", (e) => handleChange(e)))