document.addEventListener("DOMContentLoaded", function () {
    var images = [
        "img/Puerta fondo.jpg",
        "img/Puente fondo.jpg",
        "img/luces.jpg",
        "img/Puente noche.jpg",
        "img/Cielo rosa.jpg",
        "img/Amanecer.jpg",
        "img/puente noche 2.jpg"
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.getElementById("inicio").style.backgroundImage = "url('" + randomImage + "')";
});