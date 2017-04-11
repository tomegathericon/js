
function details(fname, lname) 

{
    this.fname = fname;
    this.lname = lname;


};


var tomegathericon_details = new details("Abhishek", "Kapoor");

function write_details()

{
    document.write("The Name Is " +tomegathericon_details.fname +" " +tomegathericon_details.lname);
};



//var tomegathericon_array = {fname:"Abhishek", lname: "Kapoor", age: prompt("Fucking Age Man","")};


function create_html() 

{
    document.getElementById('test').innerHTML = '<p>HELLO</p>';
}



function api_call()

{
    var api = new XMLHttpRequest();
    api.open("POST", "http://vs.impressicocrm.com/api/auth", false);
    api.setRequestHeader("Content-type", "application/json");
    // api.send(JSON.stringify({"username":prompt("Enter Your UserName"), "password":prompt("Enter Your Password")}));
    api.send(JSON.stringify({"username":"admin@vsolution.com", "password":"password@111"}));

    console.log(api.status);
    console.log(api.statusText);
    console.log(api.readyState);
    console.log(api.responseText);

    api_call.response = JSON.parse(api.responseText);
}


function gauth()

{
    var gauth_uri = "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&response_type=token&client_id=901156217549-72g3d7ni931uickq04nln2gp6729q984.apps.googleusercontent.com&redirect_uri=http://jenkins.tomegathericon.host"
    var gauth = new XMLHttpRequest();
    gauth.open("GET", gauth_uri, false);
    gauth.send();

    console.log(gauth.status);
    console.log(gauth.statusText);
    console.log(gauth.readyState);
    console.log(gauth.responseText);
}



