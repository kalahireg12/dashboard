function bdrrmcViz(){
    let containerDiv = document.getElementById("bdrrmcBoard"),
    url = "https://public.tableau.com/views/BDRRMC/Dashboard1",
    options = {
        width: 1000,
        height: 1200,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Runnning.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}