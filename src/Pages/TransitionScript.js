function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("titleName").style.fontSize = "30px";
    } else {
        document.getElementById("titleName").style.fontSize = "90px";
    }
}