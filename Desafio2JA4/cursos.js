$(document).ready(()=>{
    $("#btninicio").click(()=>{
        $("#btninicio").hide();
        $("#pagina").empty();
        $("#btncarreras").show();
        $("#btncursos").show();
        $("#pagina").load("index.html")

    })
    $.getJSON({
        url: "curso.json",
        type: "GET",
        dataType: "JSON",
        success: function(resp){
            $("#pagi3").empty()
            for(var i=0;i<resp.length;i++)
            {$("#pagi3").append("<h3>Nombre: "+resp[i].nombre+"</h3><h1>Titulo: "+resp[i].titulo+"</h1>Objetivo Resumido: "+resp[i].objetivoresumido+"<h5> NIVELES : "+resp[i].niveles+"</h5> Numero de participantes: "+resp[i].participantes)}
        }
    })
    $.getJSON({
        url: "areadeestudio.json",
        type: "GET",
        dataType: "JSON",
        success: function(resp){
            $("#pagi4").empty()
            for(var i=0;i<resp.length;i++)
            {$("#pagi4").append("<h3>Nombre: "+resp[i].nombre+"</h3><h4>Descripcion: "+resp[i].descripcion+"</h4>Numero de materias: "+resp[i].nromaterias+"<h5> ID coordinador: "+resp[i].idcoordinador+"</h5> Record Status: "+resp[i].recordstatus)}
        }
    })
              
})