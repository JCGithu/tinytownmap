function houseCommand(){
    let user = touser.toLowerCase();
    if (houseData[user]){
        if (houseData[user].district) district = ` in the ${houseData[user].district}`;
        if (houseData[user].num) num = `${houseData[user].num} houses`;
        if (houseData[user].name) name = ` called ${houseData[user].name}`;
        return `@${user} has ${num}${name}${district}!`;
    }
    return 'Sorry, no data for this user yet!';
};
let num = 'a house'; 
let name = '';
let district = '';
let houseData = {
    "colloquialowl": {
        "name": "Owl House",
        "district": "Main District",
    },
    "winsord": {
        "name": "Tall and Tiny",
        "district": "Main and Raid districts",
        "num": 2
    },
    "beckycas_":{
        "name": "Sparkles",
        "district": "Main District"
    },
    "DesireLinesGames":{
        "name": "Tigger and Red Penguin",
        "district": "Main District",
        "num": 2
    },
    "lydiapancakes": {
        "district": "Main District"
    },
    "Kellanmahree": {
        "district": "Main District"
    },
    "between_the_pages_co": {
        "name": "Christine’s Cabin",
        "district": "Main District"
    },
    "ArcaneTempest": {
        "name": "Hellequin",
        "district": "Main District and an entire library in the Raid District"
    },
    "azlxns": {
        "name": "Kylo Rent",
        "district": "Main District"
    },
    "CowlandCape": {
        "district": "Main District"
    },
    "hellovonnie": {
        "district": "Main District"
    },
    "coco___glez":{
        "district": "Main District",
    },
    "auntieplant": {
        "district": "Main District",
    },
    "astoldbyangela": {
        "name": "Wombat House",
        "district": "Main District"
    },
    "jostockdale":{
        "district": "Marbles District"
    },
    "MilliSaysMaybe": {
        "name": "Cog the Dragon's house",
        "district": "Marbles District"
    },
    "MattFraser": {
        "name": "Derp",
        "district": "Raid District"
    },
    "Arcasian": {
        "district": "Raid District"
    },
    "Aeeolus": {
        "district": "Origins District"
    }
};
houseCommand();