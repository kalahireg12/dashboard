function ncddpafViz(){
    let containerDiv = document.getElementById("ncddpafBoard"),
    url = "https://public.tableau.com/views/PHYSTATUSSPCR/Dashboard5",
    options = {
        width: 1500,
        height: 800,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}