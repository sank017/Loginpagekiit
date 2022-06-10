function login(){
    if(document.getElementById('email').value == "2004059@kiit.ac.in" && document.getElementById('password').value == 'DPmFMXtq'){
        location.href = 'https://kiit.ac.in/'
    }
    else{
        alert('Invalid login details')
    }
}