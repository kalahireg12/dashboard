function femaleViz(){
    let containerDiv = document.getElementById("femaleBoard"),
    url = "https://public.tableau.com/views/FEMALEANDLABOR/Dashboard6",
    options = {
        width: 1100,
        height: 800,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}