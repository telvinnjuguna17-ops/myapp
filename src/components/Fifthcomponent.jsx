const Fifthcomponent = () => {
    // Variables enables us create dynamic websites. (It means the contents of the website can be changing over time).
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.
    let name = "Telvin";
    let age = 20;
    let message = "I love programming"



    return(
        <div className="fifthcomponent">
            <h1>Welcome to my fifth component</h1>
            {/* Below we bind our variables.We use the variable name enclosed in curly braces to bind it. */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
      
        </div>
    )
}
// Export your component.
export default Fifthcomponent;
// Create sixth component have two variables i.e weight and height and bind them on the user interface. Render the component on App.js component.