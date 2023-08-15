function setViz(){
    let containerDiv = document.getElementById("setBoard"),
    url = "https://public.tableau.com/views/SET_16621305105160/Dashboard5",
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