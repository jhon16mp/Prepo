$(document).ready(()=>{   
  var $select = $('#AreaCurso');
   $.load("areadeestudio.json",function(resp){
          $select.append('<option value= '+resp.id+'>'+ resp.nombre + '</option>');
      })
      var $select1 = $('#AreaCurso1');
      $.load("areadeestudio.json",function(resp){
             $select1.append('<option value= '+resp.id+'>'+ resp.nombre + '</option>');
         })
          
})