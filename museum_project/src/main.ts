const checkOut = document.getElementById("checkOut-btn") as HTMLElement;
const modalBody = document.getElementById("modal-body") as HTMLElement;
const modalFooter = document.getElementById("modal-footer") as HTMLElement;

const checkOutFunc = () => {
    modalBody.innerText = ""; 
    modalBody.innerText = `
        Thank you for your order! A confirmation email is on its way.  
    `;
    modalFooter.innerText = "";
    modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="continueBtn">Continue shopping</button>
    `;
};

checkOut.addEventListener("click", checkOutFunc);

