function bhertViz(){
    let containerDiv = document.getElementById("bhertBoard"),
    url = "https://public.tableau.com/views/BHERT/Dashboard2",
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