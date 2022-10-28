function indexViz(){
    let containerDiv = document.getElementById("indexBoard"),
    url = "https://public.tableau.com/views/INDEX_16648679339660/Story1",
    options = {
        width: 1416,
        height: 925,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}