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
const btn = document.getElementById('buttonContacto');

document.getElementById('contacto')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Enviando... <i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';

   const serviceID = 'default_service';
   const templateID = 'template_4yueeel';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = 'Enviar Mensaje <i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
      alert('¡Mensaje enviado con éxito!');
      this.reset();
    }, (err) => {
      btn.innerHTML = 'Enviar Mensaje <i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
      alert('Hubo un error al enviar el mensaje: ' + JSON.stringify(err));
    });
});


