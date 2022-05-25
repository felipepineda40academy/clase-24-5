var water_data_client = {
    "ciudad":"",
    "canton":"",
    "distrito":"",
    "numero_de_medidor":"",
    "recordatorios_opt_in":""
}

var myForm_object = document.getElementById("myForm");
var delete_button = document.getElementById("delete_button");


myForm_object.onsubmit = function (event){
    event.preventDefault();
    var ciudad = document.getElementById("ciudad").value;
    var canton = document.getElementById("canton").value;
    var distrito = document.getElementById("distrito").value;
    var numero_de_medidor = document.getElementById("numero_de_medidor").value;
    var recordatorios_opt_in = document.getElementById("recordatorios").checked;
    water_data_client.ciudad=ciudad;
    water_data_client.canton=canton;
    water_data_client.distrito=distrito;
    water_data_client.numero_de_medidor=numero_de_medidor;
    water_data_client.recordatorios_opt_in=recordatorios_opt_in;
    console.log (water_data_client);
}

delete_button.onclick=function(){
    water_data_client.ciudad=null;
    water_data_client.canton=null;
    water_data_client.distrito=null;
    water_data_client.numero_de_medidor=null;
    water_data_client.recordatorios_opt_in=null;
    console.log(water_data_client);
    alert ("Tu información previa ha sido eliminada");
}