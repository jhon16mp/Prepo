$(document).ready(()=>{
    let ajaxJSON = new XMLHttpRequest();
    $(document).ready(()=>{
        ajaxJSON.open("GET","planificacioncarrera.json",true)
        ajaxJSON.send()
    })
    ajaxJSON.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 404)
            console.log("NO EXISTE")
        else
        if(this.status == 200)
        {
            let datos = JSON.parse(this.response)
            var divId = document.getElementById("pagi2")
            for(var i=0;i<datos.length;i++)
            for(var keys in datos[i]){
            console.log(keys +"-->"+datos[i][keys]);
            divId.innerHTML = divId.innerHTML + "<br/>"+ keys +"-->"+datos[i][keys];}
        }
        }
    }
})