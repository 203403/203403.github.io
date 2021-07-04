function captura(){
    var correo=document.getElementById("correo").value;
    console.log(correo)
    if (correo==""){
        alert("El correo es necesario")
    }

    var resena=document.getElementById("resena").value;
    console.log(resena)
    if (resena==""){
        alert("Falta la reseña")
    }
}
