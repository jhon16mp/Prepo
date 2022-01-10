$(document).ready(()=>{
    $("#btncursos").click(()=>{
        $("#btncursos").hide();
        $("#pagina").empty();
        $("#btncarreras").hide();
        $("#btninicio").show();
        $("#pagina").load("cursos.html")

    })
    $("#btncarreras").click(()=>{
        $("#btncursos").hide();
        $("#pagina").empty();
        $("#btncarreras").hide();
        $("#btninicio").show();
        $("#pagina").load("carreras.html")
    })
    $.getJSON({
        url: "seccion.json",
        type: "GET",
        dataType: "JSON",
        success: function(resp){
            $("#pagina").empty()
            for(var i=0;i<resp.length;i++)
            $("#pagina").append("<h5>Materia: "+resp.carreras[i].nombre+"</h5><h5>Id: "+resp[i].id+"</h5>Nivel: "+resp[i].nivel)
        }
    })
              
})