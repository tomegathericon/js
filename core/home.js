login_response = JSON.parse(window.localStorage.getItem("login_response"))
var base_url = "http://vs.impressicocrm.com";
document.write("Hello "+login_response.user.first_name+" "+login_response.user.last_name);

function get_regions()
{   
    regions_text = document.createTextNode("Please Chose From The Following Regions:");
    nextline = document.createElement("br");
    document.body.appendChild(nextline);
    document.body.appendChild(regions_text);

    for ( f=0; f < login_response.user.regions.length; f++ )
    {
        regions = document.createElement("input");
        regions.type = "button";
        regions.value = login_response.user.regions[f].region_title;
        regions.id = login_response.user.regions[f].region_id
        regions.onclick = function () {get_surveys(this.id);};
        nextline = document.createElement("br");
        console.log(regions);
        document.body.appendChild(nextline);
        document.body.appendChild(regions);
    }
}
function get_surveys(regions_id)

{
         
        var api = new XMLHttpRequest();
        alert(regions_id);
        var params = "with=question&su_region_ids="+regions_id+"&su_region_ids="+regions_id; 
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

            if (this.readyState ==4 && this.status != 200)
            {
                console.log(this.status);
                console.log(this.statusText);
                console.log(this.readyState);
                console.log(this.responseText);
                alert("Uh-Oh");
                location.reload();
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
