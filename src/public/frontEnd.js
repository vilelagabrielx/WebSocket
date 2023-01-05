
document.getElementById("Mensagem").addEventListener("keypress", submitOnEnter);


document.querySelector("#form-mensagem").addEventListener("submit", function(e){
    document.getElementById("form-mensagem").reset(); 
    
});



function submitOnEnter(event){
    if(event.which === 13){
	console.log('click enter')
	document.getElementById("btn-enviar").click();   
}
}
