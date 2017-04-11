
var linebreak = "<br />";
var base_url = "http://vs.impressicocrm.com";
//var base_url = "http://vsolutionsurvey.online";


function login()

{
    login.api = function ()
    {
        var api = new XMLHttpRequest();
        api.open("POST", base_url+"/api/auth", true);
        api.setRequestHeader("Content-type", "application/json");
        api.send(JSON.stringify({"username":login_form.username.value, "password":login_form.password.value}));
        api.onreadystatechange = function () 
          { 
            alert(api.readyState);
            alert(api.status);
            
            if (this.readyState == 4 && this.status == 200)
            {
                alert("IF");
                console.log(api.status);
                console.log(api.statusText);
                console.log(api.readyState);
                console.log(api.responseText);
                
            }

            if (this.status == 404)                      
             
            {
                alert("ELSE");
                document.body.removeChild(login_form);
                e = document.createElement("h2");
                e.setAttribute("id", "e");
                e.innerHTML="Invalid Username or Password";
                document.body.appendChild(e);
            }


          }
    }
    
    login_form = document.createElement("form");
    login_form.id = "login_form";
        
    username = document.createElement('input');
    username.id = "username";
    username.type = "textbox";
    username.value = "admin@vsolution.com";

    password = document.createElement('input');
    password.id = "password";
    password.type = "password";
    password.value = "password@111";

    submit = document.createElement('input');
    submit.id = "submit";
    submit.type = "button";
    submit.value = "Login";
    submit.onclick=function(){login.api();};

    reset = document.createElement('input');
    reset.id = "reset";
    reset.type = "reset";
    reset.value ="Reset";

    usernametext = document.createTextNode("Username:");
    passwordtext = document.createTextNode("Password:");
    nextline = document.createElement("br");

    login_form.appendChild(usernametext);
    login_form.appendChild(username);
    login_form.appendChild(nextline);
    login_form.appendChild(passwordtext);
    login_form.appendChild(password);
    nextline = document.createElement("br");
    login_form.appendChild(nextline);
    login_form.appendChild(submit);
    login_form.appendChild(reset);
    
    
    document.body.appendChild(login_form); 


}

