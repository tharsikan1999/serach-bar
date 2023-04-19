function check () {
    let input = document.getElementById("serach-product").value;

    let products = document.getElementById("product-list");

    let product = document.querySelectorAll(".product");


    for(let i=0;i<product.length;i++){
        let totalproducts = product[i];

        let productText = product[i].textContent.toLowerCase();

        let rg = new RegExp(input,"gi");

        if(productText.match(rg)){
            totalproducts.style.display = "";
        }
        else{
            totalproducts.style.display = "none";
        }
    }




    
}

