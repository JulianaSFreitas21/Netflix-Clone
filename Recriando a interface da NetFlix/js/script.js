var box = document.querySelector(".question .box")
var show = document.querySelector(".question .show")
var closer = document.querySelector(".question .show.ocultar")

box.addEventListener('click', () => {
    closer.classList.remove("ocultar")

    box.addEventListener('click', () => {
        show.classList.add("ocultar")
    })
    
})

