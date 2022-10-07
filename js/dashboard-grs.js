function grsViz(){
    let containerDiv = document.getElementById("grsBoard"),
    url = "https://public.tableau.com/views/GRS_16621304520480/Dashboard4",
    options = {
        width: 1400,
        height: 800,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}