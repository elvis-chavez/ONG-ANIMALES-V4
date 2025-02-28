document.addEventListener("DOMContentLoaded", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    document.querySelectorAll(".btn-success").forEach((boton) => {
        boton.addEventListener("click", () => {
            const card = this.closest(".card");
            const nombre = card.querySelector(".card-title").textContent;
            const precio = card.querySelector(".card-text strong").textContent;
            const cantidad = card.querySelector(".form-select").value;
            const producto = { nombre, precio, cantidad };

            const existe = carrito.some(item => item.nombre === nombre);
            if (!existe) {
                carrito.push(producto);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                alert("Producto agregado al carrito.");
            } else {
                alert("Este producto ya está en el carrito.");
            }
        });
    });

    document.querySelectorAll(".btn-primary").forEach((boton) => {
        boton.addEventListener("click", e => {
            e.preventDefault();
            const card = this.closest(".card");
            const nombre = card.querySelector(".card-title").textContent;

            const existe = carrito.some(item => item.nombre === nombre);
            if (existe) {
                alert("Compra realizada con éxito.");
                localStorage.setItem("carrito", JSON.stringify(carrito.filter(item => item.nombre !== nombre)));
            } else {
                alert("Debe agregar el producto al carrito antes de comprar.");
            }
        });
    });

    document.querySelectorAll(".btn-outline-danger").forEach((boton) => {
        boton.addEventListener("click", () => {
            const card = this.closest(".card");
            const nombre = card.querySelector(".card-title").textContent;
            alert(`${nombre} añadido a favoritos.`);
        });
    });
});