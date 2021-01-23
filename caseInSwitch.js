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

// change the val to test if function is operating corecctly
console.log(caseInSwitch(1));

// To run from commandline: node caseInSwitch.js