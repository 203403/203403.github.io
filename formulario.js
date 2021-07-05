function captura(){
    var correo=document.getElementById("correo").value;

    if (correo==""){
        alert("El correo es necesario")
    }else{
		console.log("Correo: " + correo)	
	}

    var resena=document.getElementById("resena").value;
    if (resena==""){
        alert("Falta la reseña")
    }else{
		console.log("Resena: " + resena)
	}
    alert("Gracias por enviar su resena, la revisaremos y le enviaremos una respuesta")

}
