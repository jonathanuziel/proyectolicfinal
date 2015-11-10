

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
//var div = document.getElementById("info");
//div.innerHTML = volcarDatos(nombres.Personas);//llama a funcion para imprimir nombres

function volcarDatos(datos){//la funcion se repite hasta que no hallan mas registros
    var total = datos.length;//obtiene la logitud del json
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
        data += "<li class=\"box\">\n"; 
        data += "<div class=\"box-shadow\"></div>\n"; 
        data += "<div class=\"box-gradient\">\n";
        data += "<img height='140' width='140' src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
datos[i].nombre + " " + datos[i].apellido + "\" class=\"avatar\" />\n";
        data += "<h4>\nNombre: " + datos[i].nombre + " " + datos[i].apellido +
"\n</h4>\n";
         data += "<p>\nCarnet: " + datos[i].carnet+ "\n<br />\n";
        data += "Profesión: " + datos[i].profesion + "\n</p>\n";
        data += "</div>\n";
        data += "</li>\n";
    }
    data += "</ul>\n";
    return data;//retorna los archivos json
} 
