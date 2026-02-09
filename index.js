'use strict';

// Create a function `targetTextToConsole` that takes one parameter `event` and writes the text content of `event.target`
//  to the console. Create a second function tttcAttacher. tttcAttacher should set `targetTextToConsole`
//  as the event handler for the click event on `button0` - thus when the `Click Me` button is pressed,
//  `Click Me` should appear on the console, 
function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

//Create a function `lovelyParaAttacher` that attaches an event listener to the 
// `thisisalovelyparagraph` element. When the paragraph is clicked the (provided) `lovelyToggle` function should be invoked.
function tttcAttacher() {
    document.getElementById('button0').addEventListener('click', targetTextToConsole);
}

//Create a function `lovelyButtonAttacher` that attaches an event listener to the `button1` 
// element. When `button1` is clicked the `lovelyToggle` function should be invoked.
function lovelyParaAttacher() {
    document.getElementById('thisisalovelyparagraph').addEventListener('click', lovelyToggle);
}

function lovelyButtonAttacher() {
    document.getElementById('button1').addEventListener('click', lovelyToggle);
}

//Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements.
//  Write an event handler function that fulfills the following requirement: when `in1` and `in2` change,
//  their content should be joined together and placed inside the `out1` element, 
// such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`. 
function concatAttacher() {
    document.getElementById('in1').addEventListener('change', updateConcat);
    document.getElementById('in2').addEventListener('change', updateConcat);
}

function updateConcat() {
    const in1 = document.getElementById('in1').value;
    const in2 = document.getElementById('in2').value;
    document.getElementById('out1').textContent = in1 + in2;
}

//The div `mousewatcher` contains a paragraph `snitch`. When the mouse is pointing at `mousewatcher`, 
// the `snitch` paragraph should say `IN`, otherwise it should say `OUT`. Write a function
//  `snitchAttacher`. `snitchAttacher` should associate the (provided) `snitchUpdater` function 
// with the `mouseover` and `mouseout` events. 
function snitchAttacher() {
    document.getElementById('mousewatcher').addEventListener('mouseover', snitchUpdater);
    document.getElementById('mousewatcher').addEventListener('mouseout', snitchUpdater);
}


//The div `mousereporter` contains a paragraph `report`. When the mouse is anywhere over `mousereporter`,
//  the `report` paragraph should be updated to include the position of the mouse within the screen, #
// thus `x: 000 y: 000`. Write a function `reportAttacher` that associates the mousemove event with a 
// `reportUpdater` function. Also write the `reportUpdater` function 
// which receives a single event object parameter and used the data in this object to update the `report` element. 

function reportAttacher() {
    document.getElementById('mousereporter').addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event) {
    const x = event.screenX;
    const y = event.screenY;
    document.getElementById('report').textContent = `x: ${x} y: ${y}`;
}

//The input field `newid` is meant for the user to type an ID of an HTML element; IDs cannot have spaces in them,
//  so the field needs to report when the user has a space in there. Write a function `idValidationAttacher`
//  that gives the `newid` input field an event handler that checks the value
//  whenever it has changed (use the `input` event). If the value contains any space,
//  the event handler will add a class `invalid` to the `newid` input element, so that an error message shows.
function idValidationAttacher() {
    const newid = document.querySelector('#newid');
    newid.addEventListener('input', checkInvalid);
}

function checkInvalid(e) {
    const input = e.target.value;
    e.target.classList.toggle('invalid', input.includes(' '));
}