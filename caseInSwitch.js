// Switch Statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        // : is a comparison operating, "if equal"
        case 1:
            answer = "alpha";
            // break means end of the case statement
            break;
        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break; 
            
        case 4:
            answer = "delta";
            break;
        // allows for statement if no case is chosen
        default:
            answer = "stuff";
            break;     
    }

    return answer;
}

function sequentialCases(val) {
    var answer = "";

    switch(val) {
        // for muliple cases with same return value in a row
        // declare return value at last case that returns that value
        case 1:
        case 2:
        case 3:
            answer = "same"
            // have to add break if now case(1,2,3) will disregard "same"
            break;
        case 4:
        case 5:
        case 6:
            answer = "sameAgain"
            break;
    }

    return answer;
}


// change the val to test if function is operating corectly
console.log("caseInSwitch(1):\n\t" + caseInSwitch(1));

console.log("sequentialCases(2):\n\t" + sequentialCases(2));
console.log("sequentialCases(4):\n\t" + sequentialCases(4));


// To run from commandline: node caseInSwitch.js