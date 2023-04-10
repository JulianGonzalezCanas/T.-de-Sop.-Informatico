const button = document.getElementsByClassName("btn")[0];
function validardatos(){
       if(document.getElementById("nombre").value == ""){
        document.getElementById("nombre").classList.add("is-invalid");
        document.getElementById("nombre").classList.remove("is-valid");
    } else{
        document.getElementById("nombre").classList.add("is-valid");
    }

    if(document.getElementById("validationTooltip02") == null){
        document.getElementById("validationTooltip02").classList.add("is-invalid");
    } else{
        document.getElementById("validationTooltip02").classList.add("is-valid");
    }

    if(document.getElementById("validationTooltipUsername").length > 8 || document.getElementById("validationTooltipUsername").length < 3){
        document.getElementById("validationTooltipUsername").classList.add("is-invalid");
    } else{
        document.getElementById("validationTooltipUsername").classList.add("is-valid");
    }

    if(document.getElementById("validationTooltip03") == null || document.getElementById("validationTooltip03").length > 100){
        document.getElementById("validationTooltip03").classList.add("is-invalid");
    } else{
        document.getElementById("validationTooltip03").classList.add("is-valid");
    }

    if(document.getElementById("validationTooltip04") == null){
        document.getElementById("validationTooltip04").classList.add("is-invalid");
    } else{
        document.getElementById("validationTooltip04").classList.add("is-valid");
    }

    if(document.getElementById("validationTooltip05") == null || document.getElementById("validationTooltip05").length > 4){
        document.getElementById("validationTooltip05").classList.add("is-invalid");
    } else{
        document.getElementById("validationTooltip05").classList.add("is-valid");
    }
 }