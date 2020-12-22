function mail(){
    var parms = {
        from_name: document.getElementById('client_name').value,
        message: document.getElementById('client_message').value,
        from_mail:document.getElementById('client_email').value,
    };
    
    if (grecaptcha.getResponse() == ""){
        alert("Please fill the captcha");
    } else {
         .then(function(res){
             emailjs.send("gmail","template_oqxm3bp",parms)
            console.log("Email sent",res.status);
            document.getElementById('query').style.visibility = 'visible';
            alert('Your query is successfully submitted.')
    })
    }
       
}