// FIRST OBJECTIVE

$(document).ready(function () {
    $('<button>#1</button>').attr('id', 'firstObjButton').appendTo('#firstObjDiv');
    $('#firstObjButton').click(function () {
        alert('Objective #1 Down! Five to Go!');
    })


// SECOND OBJECTIVE

    $('#secondObj').click(function () {
        var secondObjText = $('#secondObjTextBox').val();

        if (secondObjText.length > 0) {
            alert(secondObjText);
        } else {
            alert('Please Enter Some Text');
        }
    });


// THIRD OBJECTIVE - WOULD TOGGLE BE BETTER?

    $('#thirdObjDiv').mouseenter(function () {
    $('#thirdObjDiv').css('background-color', 'red');
    });
    
    $('#thirdObjDiv').mouseleave(function () {
    $('#thirdObjDiv').css('background-color', '');
    });

// FOURTH OBJECTIVE

    $('<p>This is the Fourth Objective</p>').attr('id', 'fourthObjPara').appendTo('#fourthObjDiv');
    $('#fourthObjPara').click(function () {
        var randomColor = { 'color': '#' + (Math.random() * 0xFFFFFF << 0).toString(16) };
        $('#fourthObjPara').css(randomColor);
    });


// FIFTH OBJECTIVE

    $('<button>#5</button>').attr('id', 'fifthObj').appendTo('#fifthObjDiv');
    $('<div>').attr('id', 'fifthObjText').appendTo('#fifthObjDiv');
    $('<span>').attr('id', 'fifthObjSpan').appendTo('#fifthObjText');
    $('#fifthObj').click(function () {
        $('#fifthObjSpan').text('Jessica Larsen');
    })


// SIXTH OBJECTIVE - Create a button and a `ul` in your HTML. In JavaScript, create an array 
// containing the names of your friends (at least 10. When the button is clicked, add each friend's 
// name as an `li` to the `ul` on the page.
// div sixtObjDiv
// button sixthObjButton
// ul id sixthUl
// li class sixthLiList

    $('#sixthObjButton').click(function () {
        var friendsArray = ['Stacy', 'JD', 'Jared', 'Brian', 'Kinley', 'Blair', 'Stephanie', 'Susan', 'Jim', 'Mark'];
        var list = $('#sixthUl');

        list.detach().empty().each(function (i) {
            for (var i = 0; i < friendsArray.length; i++) {
                $(this).append('<li>' + friendsArray[i] + '</li>');
                if (i == friendsArray.length - 1) {
                    $(this).appendTo('#sixthUl');
                }
            }
        });
    });
    
    
}); // This is the end punctuation for the whole page - do not remove it