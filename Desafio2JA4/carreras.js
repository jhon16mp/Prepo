$(document).ready(()=>{
    $("#btninicio").click(()=>{
        $("#btninicio").hide();
        $("#pagina").empty();
        $("#btncarreras").show();
        $("#btncursos").show();
        $("#pagina").load("index.html")

    })
    $.getJSON({
        url: "planificacioncarrera.json",
        type: "GET",
        dataType: "JSON",
        success: function(resp){
            $("#pagi2").empty()
            for(var i=0;i<resp.length;i++)
            {$("#pagi2").append("<h3>Nombre: "+resp[i].nombre+"</h3><h1>Titulo: "+resp[i].titulo+"</h1><h1>Codigo: "+resp[i].codigo+"</h1>Objetivo : "+resp[i].objetivo+"<h5> Precio Actual : "+resp[i].precioactual+"</h5> Descripcion: "+resp[i].descripcion+"<h4>Objetivo Resumido: "+resp[i].objetivoresumido+"</h4> Fecha Inicio: "+resp[i].fechainicio)}
        }
    })            
})