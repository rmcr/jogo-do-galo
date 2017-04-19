var celulas;

var jogador="azul";

var azul="azul";

var amarelo="amarelo";

function teste(celula){
	var coluna = celula.attr('x');
	var linha = celula.parent().attr('y');

	for(i=0; i<celulas; i++){
		$('td').hasClass(jogador)
			if()
	}
};

$(document).ready(function(){
	$.ajax({
		url:"https://www.random.org/integers/",
		data:{
			num:1, 
			min:3, 
			max: 5, 
			col: 1, 
			base:10, 
			format:'plain'
		},

		error: function(xhl, errocode){
		},

		success: function(data, code, xhl){ 
			
			celulas=data;

			for(var i = 0; i < celulas; i++ ){
				$('table').append('<tr y="'+i+'"></tr>')
			}

			for(var i = 0; i < celulas; i++){
				$('tr').append('<td x="'+i+'"></td>')
			}
		

		$("td").click(function(ev){
			/*console.log($(ev.currentTarget));*/
			$(ev.currentTarget).addClass(jogador);
			
			teste($(ev.currentTarget));

			if(jogador===azul){
				jogador=amarelo
			} 

			else{
				jogador=azul
			}

		})


		}
	})

})

