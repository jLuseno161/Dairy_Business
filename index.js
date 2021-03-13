//array for storing milk and shade data
var sheds  = [
    {   shedName :'Shed A',
    },
    {   shedName :'Shed B',
    },
    {   shedName :'Shed C',
    },
    {   shedName :'Shed D',
    }
];
//view available sheds
function display_sheds(){
    var shed =" ";

        for(i = 0; i< sheds.length; i++)
        {
            shed += sheds[i].shedName +"<br>";
        }
        document.getElementById("Report").innerHTML = shed;
}