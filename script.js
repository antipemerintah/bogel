function showMessage() {
    document.getElementById("message").innerText = "Masa SMA emang paling gokil! HA WOII! 🔥";
}

// Fungsi untuk menampilkan 💖 melayang
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    document.body.appendChild(heart);

    // Posisi acak di layar
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    // Hapus setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Buat 💖 melayang setiap 500ms
setInterval(createHeart, 500);
