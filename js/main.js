function toggle(){
    var header = document.getElementById("header")
    header.classList.toggle('active')
}

Swal.fire({
    title: 'Atencion',
    text: "El contenido de esta pagina Web es simplemente para una base estudiantil. Dicha pagina no tiene fines de lucrativos",
    icon: 'warning',
})

ScrollReveal().reveal('.imagen', {delay: 500});