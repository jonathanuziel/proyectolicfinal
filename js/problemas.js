var problem = {
    "Hardware": [
        {"tema" : "El disco duro está lento",
         "solucion" : "
          <b>Mantenimiento periódico:</b> Dos utilerías que pueden 
          ayudarle a maximizar el rendimiento del disco duro son 
          Norton ScanDisk y el defragmentador Norton, ambas son 
          herramientas de Norton Utilities<br><br>

        <b>ScanDisk </b>es un programa incluido en los sistemas 
        operativos DOS y Windows que busca errores en el disco duro,
        como por ejemplo espacios perdidos del disco, programas 
        estrellados y errores de archivos. Luego corrige y repara 
        los errores si se pueden reparar. Usted debe disponer de 
        tiempo porque la revisión del disco puede durar dos horas.<br><br>

        <b>Configuración del sistema:</b> Usted también puede aumentar
         la velocidad de su disco duro cambiando la función de su computadora
          de computadora de escritorio a servidor de red. Para cambiar esta 
          configuración, vaya a INICIO / CONFIGURACION / PANEL DE CONTROL, 
          seleccione PROPIEDADES DEL SISTEMA y luego seleccione el botón de 
          RENDIMIENTO. En la sección de configuración avanzada en la parte 
          inferior de la ventana, haga click en el botón SISTEMA DE ARCHIVOS.
           En la ventana de configuración, FUNCION TIPICA DE ESTA COMPUTADORA
            cambie la función seleccionada de computadora de escritorio a 
            servidor de red.<br>"
     },
         {"tema" : "",
             "solucion" : ""
     },
         {"tema" : "",
             "solucion" : ""
     }
    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var strog = document.getElementById("tema0");
var span = document.getElementById("contenido0");
strog.innerHTML = volcarDatos(problem.Hardware);//llama a funcion para imprimir nombres
span.innerHTML = volcarDatos(problem.Hardware);//llama a funcion para imprimir nombres

function volcarDatos(datos){//la funcion se repite hasta que no haigan mas registros
    var total = datos.length;//obtiene la logitud del json
   data=" ";

    for(var i=0; i<total; i++){
        data += " "+ datos[i].tema+" ";
    }

    return data;//retorna los archivos json
} 
