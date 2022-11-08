function spViz(){
    
    let containerDiv = document.getElementById("spBoard"),
    url = "https://public.tableau.com/views/SPSTATUS/Dashboard5",
    options = {
        width: 1700,
        height: 1300,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}