var userData= function(data){
    // an array to iterate through the user data
    y=[data.results[0].gender, data.results[0].dob,
     data.results[0].cell, data.results[0].phone, 
     data.results[0].email]

    //nests Rest Countries into the user data
    $.ajax({
        url:"https://restcountries.eu/rest/v2/alpha/"+ data.results[0].nat,
    })
    .done(function(data){
        console.log(data);
        z=data.name;
        y.push(z);
        // to iterate  through the user data array 
        for (var i=0; i<y.length;i++){
            $("body").append("<h2>" + y[i] + " " + "</h2>");
        }
        // $.("body").append
    })
    
     
}


var nameData= function(data){
    // an array to iterate through the name data
    var x =[data.results[0].name.title, data.results[0].name.first, data.results[0].name.last];
    //appends the data from Random User to the Body
    $("body").append("<h1>" + x[0]+ " " + x[1] + " " + x[2] + "</h1>");

}



//Random User API
$.ajax({
    url:"https://randomuser.me/api/",
    })
    .done(function(data){
        console.log(data);
        nameData(data);
        userData(data);
               
    })

