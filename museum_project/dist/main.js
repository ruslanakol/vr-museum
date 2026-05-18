var checkOut = document.getElementById("checkOut-btn");
var modalBody = document.getElementById("modal-body");
var modalFooter = document.getElementById("modal-footer");
var checkOutFunc = function () {
    modalBody.innerText = "";
    modalBody.innerText = "\n        Thank you for your order! A confirmation email is on its way.  \n    ";
    modalFooter.innerText = "";
    modalFooter.innerHTML = "\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" id=\"continueBtn\">Continue shopping</button>\n    ";
};
checkOut.addEventListener("click", checkOutFunc);
