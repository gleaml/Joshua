var pikachu='pokemon/25/';
var wildcharge='move/528/';
var thunderbolt='move/85/';
var theURL = 'http://pokeapi.co/api/v2/move/528/';
$.ajax({
    url: theURL,
    success: function(data) {
        console.log(data);
        // var damage= food.fields.item_name;
        // var movetype = food.fields.nf_calories;
        $('body').append("<h2> Pikachu used the "+ data.damage_class.name+ " " + data.type.name +" attack, " + data.name + " and it was supereffective!!!</h2>")
    }
})