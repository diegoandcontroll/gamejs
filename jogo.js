
var altura = 0
var largura = 0
var vidas = 1;
var tempo = 10;

var nivel = window.location.search;

var criaMosquitoTempo = 1500;

nivel = nivel.replace('?', '');

if(nivel === 'normal'){
	//1500
	criaMosquitoTempo = 1500;
}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000;
}else if(nivel === 'hard'){
	criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1;
	if(tempo < 0){
		clearInterval(cronometro);
		clearInterval(cria_mosca);
		window.location.href = 'vitoria.html';
	}else{
		document.getElementById('cronometro').innerHTML = tempo;
	}
}, 3000)
function posicaoRandomica(){

		//remorver o mosquito anterior(caso exista)
		if(document.getElementById('mosquito')){
			document.getElementById('mosquito').remove();
			
			if(vidas > 3){
				window.location.href = 'fim_de_jogo.html';
			}
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

			vidas++;
			
		}
		var posix = Math.floor(Math.random()* largura) - 90;
		var posiy = Math.floor(Math.random()* altura) - 90;

		posix = posix < 0 ? 0 : posix;
		posiy = posiy < 0 ? 0 : posiy;
		
		console.log(posix,posiy);
		//criar elemento html
		var mosquito = document.createElement('img');
		
		let arr = ['mosca.png', 'mosca2.png', 'mosca3.png', 'mosca4.png', 'mosca5.png', 'mosca6.png'];
		
		mosquito.src = `imagens/${arr[Math.floor(Math.random() * 6)]}`;
		
		mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();

		mosquito.style.left = posix + 'px';

		mosquito.style.top = posiy + 'px';

		mosquito.style.position = 'absolute';

		mosquito.id = 'mosquito';

		mosquito.onclick= function(){
			this.remove();
		}
		document.body.appendChild(mosquito);
		
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3);

	switch(classe){
		case 0:
			return 'mosquito1';
		case 1:
			return 'mosquito2';
		case 2:
			return 'mosquito3';
	}
	
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2);

	switch(classe){
		case 0:
			return 'LadoA';
		case 1:
			return 'LadoB';
	}
}
