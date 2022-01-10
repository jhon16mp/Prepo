$(document).ready(()=>{    
    let url= "https://api.cadif1.com/carrera";
    $.get(url,(resp)=>{
        $("#resultados").show()
        let datos = JSON.stringify(resp)
        $("#listado").text(datos)

    })
})