function dirHHViz(){
    let containerDiv = document.getElementById("dirHHBoard"),
    url = "https://public.tableau.com/views/DIRECTHHBENES/Dashboard4",
    options = {
        width: 1000,
        height: 800,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}