console.log(
    "%cSai daqui porra!", 
    "color: red; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
    }

    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "C") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
        alert("Ação não permitida nesta apresentação! :)");
    }
});
setInterval(function() {
    console.clear();
    console.log(
        "%cSai daqui porra!", 
        "color: red; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
    );
    debugger;
}, 100);