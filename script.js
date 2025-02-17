function showMessage() {
    document.getElementById("message").innerText = "SEMANGAT YA BOGEL SEKOLAH NYA🎒! 🔥";
}

// Fungsi untuk menampilkan 💖 melayang
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖cacasayang";
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
