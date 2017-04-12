login_response = JSON.parse(window.localStorage.getItem("login_response"))
var base_url = "http://vs.impressicocrm.com";
document.write("Hello "+login_response.user.first_name+" "+login_response.user.last_name);

function get_surveys()

{
         
        var api = new XMLHttpRequest();
        var params = "with=question&su_region_ids=1&su_region_ids=3"; 
        api.open("GET", base_url+"/api/survey?"+params, true);
        api.setRequestHeader("Content-type", "application/json");
        api.setRequestHeader("Authorization", "Bearer "+login_response.token);
        api.send();
        api.onreadystatechange = function () 
          { 
            
            if (this.readyState == 4 && this.status == 200)
            {
               // alert("IF");
                console.log(api.status);
                console.log(api.statusText);
                console.log(api.readyState);
                console.log(api.responseText);
                
            }

            if (this.status == 400)
            {
                console.log(this.status);
                console.log(this.statusText);
                console.log(this.readyState);
                console.log(this.responseText);
            }
             
           // {
                //alert("ELSE");
             //   document.body.removeChild(login_form);
               /*e = document.createElement("h2");
                e.setAttribute("id", "e");
                e.innerHTML="Invalid Username or Password";
                document.body.appendChild(e);*/
               // alert("Invalid Username or Password, Please Try Again!!!");
                //location.reload();
           // }

            //window.localStorage.setItem("login_response", this.responseText);
            //document.location.href="home.html";

          }

}
