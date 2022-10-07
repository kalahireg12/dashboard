function ptaViz(){
    let containerDiv = document.getElementById("ptaBoard"),
    url = "https://public.tableau.com/views/PTA_16621306730780/Dashboard7",
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