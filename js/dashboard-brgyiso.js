function brgyisoViz(){
    let containerDiv = document.getElementById("brgyIsoBoard"),
    url = "https://public.tableau.com/views/BRGYISO/Dashboard1",
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