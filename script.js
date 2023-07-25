const container = document.querySelector('#root');
// Make the colors random
const randomColor = () => {
    let color = '#';
    
    for(let i = 0; i < 6; i++){
    
        const hexChoices = '0123456789ABCDEF';
    
        color += hexChoices[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateShapeStyle = (isCircle) => {
    const borderRadius = isCircle ? '50%' : '0%';
    return {
        borderRadius,
        backgroundColor: randomColor(),
        height: '175px',
        width: '175px',
        display: 'inline-block',
        marginRight: '35px'
    }
}

const Circles = () => {
    const circle1Style = generateShapeStyle(true);
    const circle2Style = generateShapeStyle(true);
    const circle3Style = generateShapeStyle(true);

    // Create three circles using React
   return (
        <>
            <h3>Circles - by Cee Lo Green</h3>
            <div style={circle1Style}></div>
            <div style={circle2Style}></div>
            <div style={circle3Style}></div>
        </>        
   ) 
}

const Squares = () => {
    // Create three Squares
    const square1Style = generateShapeStyle(false);
    const square2Style = generateShapeStyle(false);
    const square3Style = generateShapeStyle(false);

   return (
        <>
            <h3>Squares - by Huey Lewis and the News</h3>
            <div style={square1Style}></div>
            <div style={square2Style}></div>
            <div style={square3Style}></div>
        </>        
   ) 
}

const root = ReactDOM.createRoot(container);
root.render(<>
    <Circles />
    <Squares />
</>)

//Pet Project Challenges: 
/* 
1. Generate More Shapes, control the amount and when.
2. Change the Length/Width of each shape
3. Spit out Randomized Shapes

*/



