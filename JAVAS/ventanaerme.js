function Confirmar(){

    var repuesta = confirm("¿Estas seguro de aceptar nuestra politica?");

    if(repuesta == true){
        return true;
    } else{
        return false;
    }
}