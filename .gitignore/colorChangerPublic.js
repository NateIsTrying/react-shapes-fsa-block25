// Two-Tone Color Changer





//  Create a new HTML element using JavaScript and add it  within the body of the page.
// create connection with the body
const body = document.querySelector('body');
// create the h3 tag within js
const h3 = document.createElement('h3');
// attach h3 tag inside of body tag
body.appendChild(h3);
// place text inside h3
h3.innerText = 'Color Changer';

// Change the background color of body element 
// on the page when button clicked.
// create button
const button = document.createElement('button');
// attach button to inside of body
body.appendChild(button);
// add text inside button
button.innerText = `Change Color!`

// use addEventListener, add 'click' action in first parameter
// button.addEventListener('click',() =>{
       // attach background to 'currentColor' variable;
//     const currentColor = document.body.style.backgroundColor;
//     // create condition when button pressed toggles 1st color and 2nd color.
//     if(currentColor === 'purple'){
//         document.body.style.backgroundColor = 'salmon';
//     } else {
//         document.body.style.backgroundColor = 'purple';
//     }
// });



// How do you flip the color 3 times with this addEventListener?
// button.addEventListener('click',() =>{
//     const currentColor = document.body.style.backgroundColor;
//     // in this case, add else if statement between if and else
//     if(currentColor === 'purple'){
//         document.body.style.backgroundColor = 'salmon';
       // when if executes, it leads into the else if, 
       // then the else condition
//     } else if (currentColor === 'salmon'){
//         document.body.style.backgroundColor = 'blue';
//     } else {
//         document.body.style.backgroundColor = 'purple';
//     }
// });



// How would you randomize every button click?
const randomizeColor = () => {
    // create key for randomization
    const hexParts = '0123456789ABCDEF';
    // stores all randomized hex values
    let color = '#';
    // loop through each character of the hexcolor.
    for(let i = 0; i < 6; i++){
        // takes 16 times random number between (0 to 1), rounds  
        // down to a whole number, then pulls an index from 
        // the string 'hexParts'
        color += hexParts[Math.floor(Math.random() * 16)];    
    }
    // console.log(color);
    return color;
}

// addEventListener
button.addEventListener('click',() => {
    // stores randomizeColor() action into variable 'newColor'
    const newColor = randomizeColor();
    // places randomized hexColor value into the backgroundColor 
    // of body.
    document.body.style.backgroundColor = newColor;
});