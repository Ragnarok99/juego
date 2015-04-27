var opcionMaquina=0;
var piedra=0;
var papel=1;
var tijeras=2;
var OpcionUser;
var x=0;
var user;
var machine;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function idenOpUser(Opcion){
	var op;
	if (Opcion==0) {
		op="piedra"
	}else if (Opcion==1) {
		op="papel";
	}
	else if (Opcion==2) {
		op="tijeras";
	}
	return op;	

}

while (x != 1){
	OpcionUser=prompt("Opcion:\npiedra:0\npapel:1\ntijeras:2");
	opcionMaquina= getRandomArbitrary(0,2);
	user=idenOpUser(OpcionUser);
	machine=idenOpUser(opcionMaquina);
	x=res(OpcionUser, opcionMaquina);
}

function res(OpcionUser, opcionMaquina){
	alert("Usted escogio "+ user);
	alert("Yo escogí "+ machine);

	if(OpcionUser == 0 && opcionMaquina == 1){

		alert("Yo gano");
		x=1;

	}
	else if(OpcionUser == 0 && opcionMaquina == 2){
		alert("Tu ganas");
		x=1;
	}else if (OpcionUser==1 && opcionMaquina ==0){
		alert("Tu ganas");
		x=1;
	}
	else if (OpcionUser==1 && opcionMaquina==2) {
		alert("Yo gano perra");
		x=1;
	}else if (OpcionUser==2 && opcionMaquina==0) {
		alert("Yo gano bitch");
		x=1;
	}
	else if (OpcionUser==2 && opcionMaquina==1) {
		alert("Tu ganas");
		x=1;
	}
	else{
		x=0;
	}
	return x;
}