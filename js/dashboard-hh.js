function hhViz(){
    let containerDiv = document.getElementById("hhBoard"),
    url = "https://public.tableau.com/views/HHBENES/Dashboard2",
    options = {
        width: 1500,
        height: 2300,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}