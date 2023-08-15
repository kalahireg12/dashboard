function setMasterViz(){
    let containerDiv = document.getElementById("setMasterBoard"),
    url = "https://public.tableau.com/views/SETMASTERLIST/Dashboard8",
    options = {
        width: 1000,
        height: 800,
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Running......");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}