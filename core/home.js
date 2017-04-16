login_response = JSON.parse(window.localStorage.getItem("login_response"))
var base_url = "http://vs.impressicocrm.com";

function greeting()
{
    var date = new Date();

    if ( date.getHours() >= 0 && date.getHours() < 8 )
    {
        document.write("You Should Be Sleeping "+login_response.user.first_name+" "+login_response.user.last_name);
    }

    if ( date.getHours() >= 8 && date.getHours() < 12 )
    {
        document.write("Good Morning "+login_response.user.first_name+" "+login_response.user.last_name);
    }

    if ( date.getHours() >= 12 && date.getHours() < 16 )
    {
        document.write("Good Afternoon "+login_response.user.first_name+" "+login_response.user.last_name);
    }

    if ( date.getHours() >=16 )
    {
        document.write("Good Evening "+login_response.user.first_name+" "+login_response.user.last_name);
    }
}

function ask_user_to_chose()
{
    var chose_profile = document.createElement("input");
    chose_profile.id = "profile_button";
    chose_profile.type = "button";
    chose_profile.value = "View Profile";
    chose_profile.onclick = function() {get_logged_in_user_profile();};

    var chose_region = document.createElement("input");
    chose_region.id = "region_button";
    chose_region.type = "button";
    chose_region.value = "View Available Regions";
    chose_region.onclick = function() {get_regions();};

    document.body.appendChild(chose_profile);
    document.body.appendChild(chose_region);
}


function get_logged_in_user_profile()
{
    user_profile = {};
    user_profile.show = new Array();
    user_profile.show.push(

        {"Gender"     : login_response.user.gender},
        {"First Name" : login_response.user.first_name},
        {"Last Name"  : login_response.user.last_name},
        {"Email"      : login_response.user.email},
        {"Phone"      : login_response.user.phone1},
        {"Alternate Phone" : login_response.user.phone2}

    );
    user_table = document.createElement("table");
    user_table_caption = document.createElement("caption");
    user_table_caption.innerHTML = "<h2>User Profile</h2>";
    user_table.appendChild(user_table_caption);
    user_table_style = document.createElement("style");
    user_table_style.innerHTML = "table, tr, td { border: 1px solid black; border-collapse: collapse; padding: 15px; }"

    for ( f=0; f<user_profile.show.length; f++ )
    {
    row = document.createElement("tr");
    row.colspan = "2";
    row_key = document.createElement("td");
    row_key.innerHTML = Object.keys(user_profile.show[f]);
    row_value = document.createElement("td");
    row_value.innerHTML = Object.values(user_profile.show[f]);
    row.appendChild(row_key);
    row.appendChild(row_value);
    user_table.appendChild(row);
    }

    document.body.innerHTML="";
    document.body.appendChild(user_table);
    document.body.appendChild(user_table_style);

}


function get_regions()
{
    regions_text = document.createTextNode("Please Chose From The Following Regions To Get The Corresponding Surveys:");
    nextline = document.createElement("br");
    document.body.innerHTML = "";
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

            window.localStorage.setItem("survey_response", this.responseText);
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

