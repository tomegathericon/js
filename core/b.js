
function details(fname, lname) 

{
    this.fname = fname;
    this.lname = lname;
};

var tomegathericon_details = new details("Abhishek", "Kapoor");

function write_details()

{
    document.write("The Name Is " +tomegathericon_details.fname +" " +tomegathericon_details.lname);
}




