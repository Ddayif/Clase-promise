$(document).ready(function(){
	var llamarHabilidad = function(url_habilidad){
		$.ajax({
			url: url_habilidad,
			type: 'GET',
			dataType: 'json',
		})
		.done(function(respuesta) {
			respuesta.abilities.forEach(function(el){
				document.write(el.ability.name + "<br>")
				$("llamarHabilidad").append('results')
			})

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}




	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {'limit':'15'},
	})
	.done(function(respuesta) {
		respuesta.results.forEach(function(el){
			document.write(el.name + "<br>");
			llamarHabilidad(el.url)
		})

	})
	.done(function(){
		document.write("Este es el mensaje de despues de la llamada ajax" + "<br>")	
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

})




