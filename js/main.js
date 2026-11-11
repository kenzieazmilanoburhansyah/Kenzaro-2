
// Mengambil elemen tahun dari HTML
const tahun = document.getElementById("tahun");

// Menampilkan tahun secara otomatis
if (tahun) {
    tahun.textContent = new Date().getFullYear();
}

// Interaksi tombol sapaan
const tombolSapaan = document.getElementById("tombolSapaan");

if (tombolSapaan) {
    tombolSapaan.addEventListener("click", function () {
        alert("Selamat datang di KENZARO Digital!");
    });
}
