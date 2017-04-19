	var cells;

	var player="azul";

	var azul="azul";

	var amarelo="amarelo";

	
	// var coluna = celula.attr('x');
	// var linha = celula.parent().attr('y');

	//creat a function to check if player won
function teste(events){
	var win = true;

	//verificar horizontais
	for(var line=0; line<cells; line++){
		win = true;
		for(var col=0; col<cells; col++){
			if(!$('tr[data-y='+ line +']> td[data-x='+ col +']').hasClass(player)){
				win = false;
				break;
			}
		}
		if(win==true){
			break;
		}
	}

	if(win==true){
		setTimeout(function(){
			alert("Vencedor");
		}, 100);
		return;
	}

	//verificar verticais
	for(var col=0; col<cells; col++){
		win=true;
		for(var line=0; line<cells; line++){
			if(!$('tr[data-y='+ line +']> td[data-x='+ col +']').hasClass(player)){
				win = false;
				break;
			}
		}
		if(win==true){
			break;
		}
	}
	if(win==true){
		setTimeout(function(){
			alert("Vencedor");
		}, 100);
		return;
	}

	//verificar diagonais
	
	win=true;
	for(batatas=0; batatas<cells; batatas++){
		if(!$('tr[data-y='+ batatas +'] > td[data-x='+ batatas +']').hasClass(player)){
			win = false;
			break;
		}
	}

	
	if(win==true){
		setTimeout(function(){
			alert("Vencedor");
		}, 100);
		return;
	}

	//as outras diagonais

	win=true;
	for(batatas=0; batatas<cells; batatas++){
		var conta = cells-1-batatas;
		if(!$('tr[data-y='+ conta +'] > td[data-x='+ batatas +']').hasClass(player)){
			win = false;
			break;
		}
	}

	if(win==true){
		setTimeout(function(){
			alert("Vencedor");
		}, 100);
		return;
	}
}

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
			
			cells=data;

			for(var i = 0; i < cells; i++ ){
				$('table').append('<tr data-y="'+i+'"></tr>')
			}

			for(var i = 0; i < cells; i++){
				$('tr').append('<td data-x="'+i+'"></td>')
			}
		

		$("td").click(function(event){
			/*console.log($(ev.currentTarget));*/
			$(event.currentTarget).addClass(player);
			
			teste($(event.currentTarget));

			if(player===azul){
				player=amarelo;
			} 

			else{
				player=azul;
			}

		});
	}});
});
