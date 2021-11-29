
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioconDescuento = 100 - descuento;
    const precioConDescuento = (precio * descuento) / 100;

    return precioConDescuento;
}

const coupons = ["Nabil", "Izzat", "BlackFriday"];

function onClickPriceDiscound() {
    const inputPrice = document.getElementById("inputPrice");
    const Vprecio = inputPrice.value;
    console.log(Vprecio)

    const inputCoupon = document.getElementById("inputCoupon");
    const Vcoupon = inputCoupon.value;
    console.log(Vcoupon)

    let descuento;

    switch (Vcoupon) {
        case coupons[0]:
            descuento = 15
            break;
        case coupons[1]:
            descuento = 30
            break;
        case coupons[2]:
            descuento = 25
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(Vprecio, descuento);
    const resultP = document.getElementById("resultP")

    console.log(precioConDescuento)

    resultP.innerText = "El precio a pagar seria: " + precioConDescuento;
}
