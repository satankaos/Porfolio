let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// ENVIO DE MENSAJE
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "a877051a-e2a3-4a1e-aca5-a800cea4ea5f");

    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Enviando... <i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("¡Mensaje enviado con éxito! Te contactaremos pronto.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Algo salió mal. Por favor, inténtalo de nuevo.");
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});


