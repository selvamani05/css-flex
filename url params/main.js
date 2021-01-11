function submitForm() {
    var productWanted = document.getElementById("product").value;
    var quantityWanted = document.getElementById("quantity").value;

    window.location.href= "./output.html?product=" + productWanted + '&quantity' + quantityWanted;

    




}