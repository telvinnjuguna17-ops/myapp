import { useState } from "react";

const Seventhcomponent = () => {

    //The useState hook enables us create dynamic websites whereby it usually has the start/initial state followed by a state that get to show when some effects happen on our website. 

    const[number , setNumber] = useState(10);
    return (
        <div className="seventhcomponent">

            {/* Below we bind our value for number. */}
            <h1>Welcome to my seventh component</h1>
            <h2>Current number is : {number}</h2>

            {/* Call the set number function to update the number after the click effect. */}
            <button onClick={() => setNumber(20)}>Click to update the number</button>
        
        </div>    
    )
}
export default Seventhcomponent;

// Create a Sixthcomponent.jsx. Inside of it, have the useState with the initial value of weight being 50Kgs, have a button to update the weight to 55kgs when the button is clicked. Render the component on App.js.
// Research on routing in Reactjs.