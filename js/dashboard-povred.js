function povRedViz(){
    let containerDiv = document.getElementById("povRedBoard"),
    url = "https://public.tableau.com/views/POVREDUCTION/Dashboard3",
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