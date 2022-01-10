$(document).ready(()=>{
    let ajaxJSON = new XMLHttpRequest();
    let ajax2JSON = new XMLHttpRequest();
    $(document).ready(()=>{
        ajaxJSON.open("GET","curso.json",true)
        ajaxJSON.send()
    })
    $(document).ready(()=>{
        ajax2JSON.open("GET","areadeestudio.json",true)
        ajax2JSON.send()
    })
    ajaxJSON.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 404)
            console.log("NO EXISTE")
        else
        if(this.status == 200)
        {
            let datos = JSON.parse(this.response)
            var divId = document.getElementById("pagi3")
            for(var i=0;i<datos.length;i++)
            for(var keys in datos[i]){
            console.log(keys +"-->"+datos[i][keys]);
            divId.innerHTML = divId.innerHTML + "<br/>"+ keys +"-->"+datos[i][keys];}
        }
        }
    }
    ajax2JSON.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 404)
            console.log("NO EXISTE")
        else
        if(this.status == 200)
        {
            let da2tos = JSON.parse(this.response)
            var div2Id = document.getElementById("pagi4")
            for(var i=0;i<da2tos.length;i++)
            for(var keys in da2tos[i]){
            console.log(keys +"-->"+da2tos[i][keys]);
            div2Id.innerHTML = div2Id.innerHTML + "<br/>"+ keys +"-->"+da2tos[i][keys];}
        }
        }
    }
})