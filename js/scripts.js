
function pegarValores(event){
    
   
    let valor = event.target.value;
    let border = document.getElementById("divBorder")
    document.getElementById("input_tr1").value = valor
    document.getElementById("input_tr2").value = valor
    document.getElementById("input_tr3").value = valor
    document.getElementById("input_tr4").value = valor
  
   
    
    border.style.borderRadius = valor.toString() + 'px'
   
    let checkboxWeb = document.getElementById('opt_webkit');
    let checkGecko = document.getElementById('opt_gecko');
    let checkboxCss = document.getElementById('opt_css3');
 
if(checkboxWeb.checked && checkGecko.checked && checkboxCss.checked ) {
    document.getElementById("textarea").value = `-webkit-border-radius:${valor.toString()}px;\n-moz-border-radius:${valor.toString()}px;\nborder-radius: ${valor.toString()}px;` 
   }else if(checkboxWeb.checked && checkGecko.checked){
    document.getElementById("textarea").value = `-webkit-border-radius:${valor.toString()}px;\n-moz-border-radius:${valor.toString()}px;`
   } else if(checkboxWeb.checked && checkboxCss.checked){
    document.getElementById("textarea").value = `-webkit-border-radius:${valor.toString()}px;\nborder-radius: ${valor.toString()}px;` 
   }else if( checkGecko.checked && checkboxCss.checked ){
    document.getElementById("textarea").value = `-moz-border-radius:${valor.toString()}px;\nborder-radius: ${valor.toString()}px;` 
   }

}
