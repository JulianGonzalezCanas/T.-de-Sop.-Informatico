const button = document.getElementsByClassName("btn")[0];
var contador = 1;
setInterval(pasarImagen, 3000);
function validardatos(event){
    event.preventDefault();
       if(document.getElementById("nombre").value == ""){
        document.getElementById("nombre").classList.add("is-invalid");
        document.getElementById("nombre").classList.remove("is-valid");
    } else{
        document.getElementById("nombre").classList.add("is-valid");
        document.getElementById("nombre").classList.remove("is-invalid");
    }

    if(document.getElementById("apellido").value == ""){
        
        document.getElementById("apellido").classList.remove("is-valid");
        document.getElementById("apellido").classList.add("is-invalid");
    } else{
        document.getElementById("apellido").classList.add("is-valid");
        document.getElementById("apellido").classList.remove("is-invalid");
    }

    if(document.getElementById("username").value.length > 15 || document.getElementById("username").value.length < 3 || document.getElementById("username").value == ""){
        document.getElementById("username").classList.add("is-invalid");
        document.getElementById("username").classList.remove("is-valid");
    } else{
        document.getElementById("username").classList.add("is-valid");
        document.getElementById("username").classList.remove("is-invalid");
    }

    if(document.getElementById("ciudad").value == "" || document.getElementById("ciudad").value.length > 100){
        document.getElementById("ciudad").classList.add("is-invalid");
        document.getElementById("ciudad").classList.remove("is-valid");
    } else{
        document.getElementById("ciudad").classList.add("is-valid");
        document.getElementById("ciudad").classList.remove("is-invalid");
    }

    if(document.getElementById("provincia").value == ""){
        document.getElementById("provincia").classList.add("is-invalid");
        document.getElementById("provincia").classList.remove("is-valid");
    } else{
        document.getElementById("provincia").classList.add("is-valid");
        document.getElementById("provincia").classList.remove("is-invalid");
    }

    if(document.getElementById("zipcode").value == "" || document.getElementById("zipcode").value.length > 4){
        document.getElementById("zipcode").classList.add("is-invalid");
        document.getElementById("zipcode").classList.remove("is-valid");
    } else{
        document.getElementById("zipcode").classList.add("is-valid");
        document.getElementById("zipcode").classList.remove("is-invalid");
    }
}

function pasarImagen(){

    console.log("hola");
    
    $("#foto" + contador).style="display: none";
    contador++;
     if(contador > 3){
        contador = 1;
     }
    $("#foto" + contador).style="display: block";
}
    

 