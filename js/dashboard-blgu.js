function blguViz(){
    let containerDiv = document.getElementById("blguBoard"),
    url = "https://public.tableau.com/views/BLGU/Dashboard3",
    options = {
        hideTabs: true,
        width: 1000,
        height: 800,
        onFirstInteractive: function () {
            console.log("Runninng.....");
        }
    };

    let viz = new tableau.Viz(containerDiv, url, options);
}