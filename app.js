var buttontoggle = document.getElementById("toggle");
as;
HTMLButtonElement;
var get = document.getElementById("get");
as;
HTMLElement;
buttontoggle === null || buttontoggle === void 0 ? void 0 : buttontoggle.addEventListener("click", function () {
    if ((get === null || get === void 0 ? void 0 : get.style.display) === "none") {
        get.style.display = "block";
    }
    else {
        get === null || get === void 0 ? void 0 : get.style.display = "none";
    }
});
