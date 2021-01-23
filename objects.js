// Objects in javascript

var ourDog = {
    // "property" : "value"
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};


var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

// dot notation to access values
var nameValue = myDog.name;
console.log("myDog nameValue:\n\t" + nameValue)

// bracket notation to access values
var friendsValue = ourDog["friends"];
console.log('ourDog friendsValue:\n\t' + friendsValue);

// accessing object properties with variables
var legsValue = myDog["legs"];
console.log("myDog legsValue:\n\t:" + legsValue)

// reassigning values
myDog.name = "Happy Coder";
console.log("myDog renamed to:\n\t" + myDog.name)

// adding additional property to object
myDog['bark'] = 'woof';
console.log("new bark property:\n\t:" + myDog.bark)

// deleting properties
delete myDog.bark
console.log("deleted bark?:\n\t" + myDog.bark)

// use object property to look up value
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foctrot: "frank"
    };

    result = lookup[val];

    return result;

}

console.log("lookup value:\n\t" + phoneticLookup('charlie'));

// testing objects for property
function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "Not Found"
    }
}

console.log("testing for object:\n\t" + checkObj('name'))


// how to keep copy of original object before editing/changing
var collectionCopy = JSON.parse(JSON.stringify(collection));