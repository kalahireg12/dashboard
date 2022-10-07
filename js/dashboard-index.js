function indexViz(){
    let containerDiv = document.getElementById("indexBoard"),
    url = "https://public.tableau.com/views/INDEX_16648679339660/Story1",
    options = {
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}