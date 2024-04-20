const parent = React.createElement("div",{id:"parent"},
    React.createElement("div", {id:"child"}, 
        [
            React.createElement("h1", {}, "this is h1 tag inside parent and child div"),
            React.createElement("h2", {}, "this is h2 tag inside parent and child div"),
        ]
    )
)

const heading = React.createElement("h1", {id:"heading"}, "this is first react program");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);






// NOTES

// React.createElement is creating an object
// .render(); converts the object into html and put it into the dom