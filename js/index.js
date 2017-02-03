$(document).ready(function(){
	var numeros = [];
	var ordenados = [];
	$("#txtNumero").focus();
	var btnAgregar = $("#btnAgregar");
	btnAgregar.on("click", function(){
		var valor = $("#txtNumero").val();
		if(valor == ""){
			alert("Debe de ingresar un número entero");
		}else{
			var existe = 0;
			if(numeros.length>0){
				for(numero in numeros){
					if(valor == numeros[numero]){					
						existe = 1;
					}
				}
				if(existe == 0){
					numeros.push(valor);
				}else{
					alert("El número ingresado ya existe");
				}
			}else{
				numeros.push(valor);
			}

		}
		ordenados = numeros;
		$("#txtSecuencia").text("Ingresados: " + numeros);
		$("#txtNumero").val("");
		$("#txtNumero").focus();
	});
	
	
	var btnOrdenar = $("#btnOrdenar");
	btnOrdenar.on("click", function(){
		ordenados = numeros;
		$("#txtOrdenado").text("Ordenados: " + ordenados.sort(function(a, b){return a-b}));
		btnAgregar.attr('disabled','disabled');
		btnOrdenar.attr('disabled','disabled');
	});	
	
	var btnLimpiar = $("#btnLimpiar");
	btnLimpiar.on("click", function(){
		numeros = [];
		ordenados = [];	
		$("#txtNumero").val("");
		$("#txtNumero").focus();
		$("#txtSecuencia").text("");
		$("#txtOrdenado").text("");
		btnAgregar.removeAttr('disabled');
		btnOrdenar.removeAttr('disabled');
	});		
	
})

function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}