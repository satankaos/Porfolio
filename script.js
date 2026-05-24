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

   // Cambiar el texto del botón a "Enviando..."
   btn.innerHTML = 'Enviando... <i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';

   const formData = new FormData(this);
   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);

   fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: json
   })
   .then(async (response) => {
      let result = await response.json();
      if (response.status === 200) {
         alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
         this.reset();
      } else {
         console.log(result);
         alert('Error al enviar el mensaje: ' + result.message);
      }
   })
   .catch(error => {
      console.log(error);
      alert('Hubo un error de conexión al enviar el mensaje.');
   })
   .then(() => {
      // Restaurar el texto del botón
      btn.innerHTML = 'Enviar Mensaje <i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>';
   });
});


