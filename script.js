var container = document.getElementsByClassName("left");
var summary = container.document.getElementsByClassName("summary");


for (var i = 0; i < summary.length; i++) {
    summary[i].addEventListener("click", function() {
        var currentSummary = document.getElementsByClassName("active");
        currentSummary[0].className = currentSummary[0].className.replace("active", "");
        this.className += " active";
    });
}


