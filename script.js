document.querySelector("#my-button").addEventListener("click", () => {
    const current = parseInt(document.querySelector("#counter").innerHTML)

    document.querySelector("#counter").innerHTML = current + 1
})