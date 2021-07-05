function captura(){
    var correo=document.getElementById("correo").value;
    console.log("Correo: " + correo)
    if (correo==""){
        alert("El correo es necesario")
    }
    alert("Para ver si funciona")

    var resena=document.getElementById("resena").value;
    console.log("Resena: " + resena)
    if (resena==""){
        alert("Falta la reseña")
    }
    alert("Gracias por enviar su resena, la revisaremos y le enviaremos una respuesta")
}
