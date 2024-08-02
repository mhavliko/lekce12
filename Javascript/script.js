let paragraf = document.querySelector("#text")

paragraf.addEventListener("click", priKliknuti)

function priKliknuti() {
    paragraf.textContent = "Prave jsi na me klikl"
    //paragraf.classList.add("modra")
    paragraf.classList.toggle("modra")
}
