const contraseña = document.querySelector("#contraseña");
const confirmar = document.querySelector("#confirmar");
const boton = document.querySelector(".boton");
const alerta = document.querySelector(".alerta");
const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


boton.addEventListener("click", function validar(e) {
    if(e) e.preventDefault(); // Frena al navegador al intentar mandar el formulario si faltan datos o hay datos incorrectos
    
    let inputContraseña = contraseña.value;
    let inputConfirmar = confirmar.value;
    alerta.innerHTML = "";

    if(!regExpression.test(inputContraseña)) {
        let mensaje = document.createElement("p");
        mensaje.textContent = "La contraseña debe contener 8 caracteres, 1 Mayúscula y 1 Minúscula";
        mensaje.setAttribute("style", "font-weight: bold; font-size: 1.4rem; color: darkred; margin: 0; margin-left: 1.5rem");
        contraseña.setAttribute("style", "border: 1px solid darkred");
        alerta.appendChild(mensaje);
    } else if(regExpression.test(inputContraseña) && inputConfirmar === "") {
        let mensaje = document.createElement("p");
        mensaje.textContent = "Confirme su contraseña!";
        mensaje.setAttribute("style", "font-weight: bold; font-size: 1.4rem; color: darkred; margin: 0; margin-left: 1.5rem");
        contraseña.setAttribute("style", "border: 1px solid darkred");
        confirmar.setAttribute("style", "border: 1px solid darkred");
        alerta.appendChild(mensaje);
    } else if(inputContraseña != inputConfirmar) {
        let mensaje = document.createElement("p");
        mensaje.textContent = "La contraseña no coincide";
        mensaje.setAttribute("style", "font-weight: bold; font-size: 1.4rem; color: darkred; margin: 0; margin-left: 1.5rem");
        confirmar.setAttribute("style", "border: 1px solid darkred");
        alerta.appendChild(mensaje);
    } else {
        let mensaje = document.createElement("p");
        mensaje.textContent = "Contraseña valida! puede continuar";
        mensaje.setAttribute("style", "font-weight: bold; font-size: 1.4rem; color: steelblue; margin: 0; margin-left: 1.5rem");
        contraseña.setAttribute("style", "border: 1px solid steelblue");
        confirmar.setAttribute("style", "border: 1px solid steelblue");
        alerta.appendChild(mensaje);
    }
});


