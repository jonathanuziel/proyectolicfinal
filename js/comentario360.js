$(function() {
	$("#textArea").focus(function() {
		$("#textArea").animate({"height": "85px",}, "fast" );
		$("#textArea").addClass("textAreaActivo");
		$("#textArea").removeClass("textAreaInactivo");
		$("#divBoton").slideDown("fast");
	});

	$("#btnCancelar").click(function(e) {
		$("#textArea").animate({"height": "20px",}, "fast" );
		$("#textArea").addClass("textAreaInactivo");
		$("#textArea").removeClass("textAreaActivo");
		$("#divBoton").slideUp("fast");
		e.preventDefault();
	});

	$("#btnGuardar").click(function(e) {
		var texto = $("#textArea").val();
		$("#comentarios").append('<li>' + texto + '</li>');
		$("#textArea").val('');
		e.preventDefault();
	});
});


$(document).ready(function(){ 
	var i=0;
	 $.getJSON("js/comentarios.json", function(datos) {

	 		$.each(datos["dato"], function(idx,infom) {
               $('#comen tr:last').after("<tr><th id='nombre'> "+infom+"</th><td>"+datos["comen"][i]+"</td></tr>");
       			i++;

                 });
            });
                
});



function insert(){
	var nom = $("#nombre2").val();
	var comen = $("#comentario").val();
	var fech= new Date();
	$('#comen tr:last').after("<tr><th id='nombre'> "+nom+ fech.getDate()+"/"+fech.getMonth()+"/"+fech.getFullYear() +"</th><td>"+comen+"</td></tr>");



}

/*


function insert_json(){
	
	

}
		var i=0;
		 $.getJSON("js/comentarios.json", function(datos) {

	 
		$.each(datos["dato"], function(idx,infom) {
               i++;
		});
		});
i=i-1;

	var yourObject = {
	 datos["dato"][i]="fcjctctrc,",
	 datos["comen"][i]="fcjctctrc,"};
JSON.stringify(yourObject);  


}

*/
        