

window.onload = function() {
    covidStats();
}
function covidStats() {
    fetch('https://api.covid19api.com/summary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data.Global)
        console.log(data.Countries[0].Date)
        console.log(data.Countries[0])
        console.log(data.Countries)
        
       
        let population = data.Global.TotalConfirmed;
        let update = data.Countries[0].Date;
        let confirmedCases = data.Global.NewConfirmed;
        let deaths = data.Global.TotalDeaths;

        


        document.getElementById('population').innerHTML = population;
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases;
		document.getElementById('deaths').innerHTML = deaths;
        document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        var select = document.getElementById("select");
        let countries = data.Countries;
        
        
        for (var i = 0; i < countries.length; i++)
        {
            var option = document.createElement("OPTION");
            
            option.innerHTML = countries[i].Country;
            option.value = i;

            select.options.add(option);
           
        }
     

        
    })
    .catch((err) => {
        // Do something for an error here
        console.log('error')
    })
    //Update every 12 hours
    setTimeout(covidStats, 43200000)
    
}

function getSelectValue()
{
    
    var x = document.getElementById("select").value;
 
   
   
    fetch('https://api.covid19api.com/summary')
    .then((response) => {
        return response.json()
    })

    .then((data) => {   
        
        // <td id="Country"></td>
        // <td id="TotalCon"></td>
        // <td id="TotalDe"></td>
        // <td id="TotalRec"></td>
        // <td id="NewConf"></td>
       


            // let country = data.Countries[x].Country;
             document.getElementById("Country").innerHTML = data.Countries[x].Country;
             document.getElementById("TotalCon").innerHTML = data.Countries[x].TotalConfirmed;
             document.getElementById("TotalDe").innerHTML = data.Countries[x].TotalDeaths;
             document.getElementById("TotalRec").innerHTML = data.Countries[x].TotalRecovered;
             document.getElementById("NewConf").innerHTML = data.Countries[x].NewConfirmed;
    })

    .catch((err) => {
        // Do something for an error here
        console.log('error')
    })


}
















//   function refreshData(){
//       clearData()
//   }

//   function clearData(){
//     var c = document.getElementById("data");
//     while (c.lastChild) c.removeChild(c.lastChild);
//       init()
//   }


/******************************************************************************************************* */