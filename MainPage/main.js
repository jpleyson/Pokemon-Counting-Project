//Call on this function once submit gets clicked and pass the value in
document.getElementById("numberEnter").onclick = userInput;
document.getElementById("numberBy2").onclick = countByTwoFunc;


var changeTitle = document.getElementById("title");

const mainBody = document.getElementById("mainBody");

function userInput() {
    //clear everything in the  main body every time a user inputs a new value
    $('#mainBody').empty();
    //grabs value (number entered) from text box after submit and converts it to String
    var numberByUser = document.getElementById("input_id").value;


    // ERROR INPUT CHECKING
    if (isNaN(parseInt(numberByUser))) {
        alert("Professor Oak: Must be a number!");
        return;
    }
    if (parseInt(numberByUser) < 1) {
        alert("Professor Oak: Value cant be less than 1!");
        return;
    }
    if (parseInt(numberByUser) > 386) {
        alert("Professor Oak: That value is too big! I haven't discovered that many pokemon yet!");
        return;
    }

    //change title to reflect the number the user typed in
    changeTitle.innerHTML = "You entered " + parseInt(numberByUser);

    //gets input as string
    //alert(numberByUser);

    //gets input as int
    //alert(parseInt(numberByUser) + 5);

    //i + 1 because i starts at 0 but pokemon images start at 1
    for (let i = 0; i < parseInt(numberByUser); i++) {
        //appending text
        const node = document.createTextNode(i + 1);
        mainBody.appendChild(node);

        //appending image
        var img = document.createElement("img");

        //if single digits
        if (i + 1 < 10) {
            img.src = "pokemonPNGs/00" + (i + 1) + ".png";
        }
        //if double digits
        else if (i + 1 < 100) {
            img.src = "pokemonPNGs/0" + (i + 1) + ".png";
        }
        //if triple digits
        else if (i + 1 < 1000) {
            img.src = "pokemonPNGs/" + (i + 1) + ".png";
        }
        else {
            alert("Something went wrong! " + "i is: " + i);
        }

        mainBody.appendChild(img);
        const linebreak = document.createElement("br");
        mainBody.appendChild(linebreak);
    }




}

function countByTwoFunc() {
    //clear everything in the  main body every time a user inputs a new value
    $('#mainBody').empty();
    //grabs value (number entered) from text box after submit and converts it to String
    var numberByUser = document.getElementById("enterBy2").value;


    // ERROR INPUT CHECKING
    if (isNaN(parseInt(numberByUser))) {
        alert("Professor Oak: Must be a number!");
        return;
    }
    if (parseInt(numberByUser) < 1) {
        alert("Professor Oak: Value cant be less than 1!");
        return;
    }
    if (parseInt(numberByUser) > 386) {
        alert("Professor Oak: That value is too big! I haven't discovered that many pokemon yet!");
        return;
    }
    if (((parseInt(numberByUser)) % 2) != 0) {
        //debugging
        //alert(parseInt(numberByUser)+ " % 2 is "+ ((parseInt(numberByUser)%2)));

        alert("Professor Oak: That value is not divisible by 2!");
        return;
    }
    //change title to reflect the number the user typed in
    changeTitle.innerHTML = "You entered " + parseInt(numberByUser);

    //gets input as string
    //alert(numberByUser);

    //gets input as int
    //alert(parseInt(numberByUser) + 5);

    //i + 1 because i starts at 0 but pokemon images start at 1
    for (let i = 0; i < parseInt(numberByUser); i++) {
        if (((i + 1) % 2) == 0) {
            //appending text
            const node = document.createTextNode(i + 1);
            mainBody.appendChild(node);

            //appending image
            var img = document.createElement("img");

            //if single digits
            if (i + 1 < 10) {
                img.src = "pokemonPNGs/00" + (i + 1) + ".png";
            }
            //if double digits
            else if (i + 1 < 100) {
                img.src = "pokemonPNGs/0" + (i + 1) + ".png";
            }
            //if triple digits
            else if (i + 1 < 1000) {
                img.src = "pokemonPNGs/" + (i + 1) + ".png";
            }
            else {
                alert("Something went wrong! " + "i is: " + i);
            }

            mainBody.appendChild(img);
            const linebreak = document.createElement("br");
            mainBody.appendChild(linebreak);
        }
    }
}
//   reference for adding text to an element in JS: https://www.w3schools.com/js/js_htmldom_nodes.asp
//   reference for adding img to an element in JS: https://moonbooks.org/Articles/How-to-add-an-image-in-a-HTML-page-using-javascript-/