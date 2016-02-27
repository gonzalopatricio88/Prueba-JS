Crear la clase (con la función constructora) de teléfono, un teléfono tiene un número asignado que se le pasa a la función constructora, y carácterístcas como marca y color. (1 pto)

Crear un método que se llame marcar que aumente el contador de llamadas en uno. (1 pto)

Crear un arreglo de teléfonos y crear una función reciba un arreglo de teléfonos y que permita devolver otro arreglo con todos los teléfono de una marca. (1 pto)


this.telefonos=[];
function Telefono(numero, marca, color){
	this.numero = numero;
	this.marca= marca;
	this.color = color;
	this.contador=0;
	this.marcar = function (){
		this.contador +=1;
	};
	this.recibir = function(telefono){
		
	}
}