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
//add more sheds
function add_sheds(){
    var newObject = {};
    newObject.shedName = document.getElementById("inputText").value;
    sheds.push(newObject);
    alert(newObject.shedName+ " added successfully");
    document.getElementById("inputText").value= ' ';
}
//total production
var milkPerShed = 0;
var total = 0;
function totalProduction(){
      
    document.getElementById("Report").innerHTML =' '; 
      var i = 0;
        while (i < sheds.length) {
          //text += "<br>The number is " + i;
          var ltrspershed = prompt("Please Litres of milk from:" +sheds[i].shedName, "");
            if(ltrspershed == null){
                alert("You Pressed Cancel."); 
                break; 
              }
            else{
                ltrspershed = parseInt(ltrspershed);
                if ( isNaN(ltrspershed)){ 
                    alert("Enter a valid figure.");
                    document.getElementById("Report").innerHTML = ' ';
                    break; 
                  }
                else { 
                    
                    //create new object for milkpershed
                    obj = {};
                    sheds.map(function(obj){
                    obj.milkPerShed = ltrspershed;
                    return obj;
                    });
                }
                
               document.getElementById("Report").innerHTML += "Your production in " + sheds[i].shedName + " is " + sheds[i].milkPerShed + " litres per day."+ "<br>" +"<br>";
               milkPerShed += parseFloat(sheds[i].milkPerShed);            
              }
          i++;
        }
              total = milkPerShed;
              document.getElementById("Report").innerHTML += "The total production is " +  total + " litres per day" + "<br>" +"<br>" ; 

              incomeOverTime(price, period);

              incomePerMonth();
}