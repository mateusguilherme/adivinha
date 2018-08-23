var chances = document.querySelector("#chances");
var saida = document.querySelector("#saida");
var botao = document.querySelector("#adivinhe");
var recomecar = document.querySelector("#recomecar");
var aleatorio = Math.floor((Math.random() * 100) + 1);
var vencedor = false;
var tentativas = 10;
var tentativasExe = 0;

botao.addEventListener("click", verificaNumero, false);
recomecar.addEventListener("click", restart, false);

function enter(event) {
	if (event.keyCode == 13)
		botao.click();
}

function verificaNumero() {
	numero = document.querySelector("#txtNumero");
	numero = numero.value;

	if (isNaN(numero) || numero < 1 || numero > 100) {

		alert("O valor digitado não é valido!");
		numero.value = "";
		numero.focus();

	} else if (numero < aleatorio) {

		saida.innerHTML = "O número digitado é menor!";
		verificaChances();

	} else if (numero > aleatorio) {

		saida.innerHTML = "O número digitado é maior!";
		verificaChances();

	} else if (numero == aleatorio) {

		vencedor = true;
		verificaChances();
		end();

	}
}

function verificaChances() {
	tentativas--;
	tentativasExe++;

	if(tentativas == 0) {

		end();

	} else {

		saida.style.visibility = "visible";
		chances.innerHTML = "Você tem " + tentativas + " tentativas";

	}
}

function end() {

	if (vencedor) {

		botao.style.visibility = "hidden";
		chances.style.visibility = "hidden";
		saida.style.visibility = "hidden";
		txtNumero.style.visibility = "hidden";
		entrada.innerHTML = "Você acertou em " + tentativasExe + " tentativas, parabéns!!!!";
		recomecar.style.visibility = "visible";

	} else {

		botao.style.visibility = "hidden";
		chances.style.visibility = "hidden";
		saida.style.visibility = "hidden";
		txtNumero.style.visibility = "hidden";
		entrada.innerHTML = "Suas tentativas acabaram!";
		recomecar.style.visibility = "visible";

	}

}

function restart() {

	location.reload();

}

window.onload = function() {

	txtNumero.focus();
	txtNumero.value = "";
	chances.innerHTML = "Você tem " + tentativas + " tentativas";
	saida.innerHTML = "Default";
	saida.style.visibility = "hidden";

}