function superhero(realName, ability, gender, archEnemy){
    this.realName=realName,
    this.ability=ability,
    this.gender= gender,
    this.archEnemy=archEnemy
// replacing an ability
    this.newAbility = function(ability2){
        this.ability= ability2 }
}

var superman = {
    "realName" : 'Clark Kent',

};
var batman ={
    'realName' : 'Bruce Wayne'
}

var batman = new superhero('Bruce Wayne', 'dat Money','male','Joker')
var staticShock = new superhero('Virgil Hawkings','electricity','male','Ebon')

console.log(batman.ability);
batman.newAbility('drop Kick');
console.log(batman.ability);


console.log(staticShock.realName);