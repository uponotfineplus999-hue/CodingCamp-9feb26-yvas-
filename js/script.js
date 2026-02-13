// Fungsi Prompt Nama di Awal
function askName() {
    const name = prompt("Masukkan nama Anda untuk menyapa:", "");
    const welcomeTitle = document.getElementById("welcome-title");
    
    if (name) {
        welcomeTitle.innerText = `Hi ${name}, Welcome To Website`;
    } else {
        welcomeTitle.innerText = `Hi Guest, Welcome To Website`;
    }
}

// Panggil saat halaman dimuat
window.onload = askName;

// Form Validation & Submit
const form = document.getElementById("messageForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah halaman reload

    // Ambil data
    const name = document.getElementById("inputName").value;
    const birth = document.getElementById("inputBirth").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("inputMessage").value;
    const currentTime = new Date().toLocaleString();

    // Validasi sederhana
    if (name === "" || birth === "" || message === "") {
        alert("Harap isi semua kolom!");
        return;
    }

    // Tampilkan di Output Box
    document.getElementById("timeResult").innerText = currentTime;
    document.getElementById("nameResult").innerText = name;
    document.getElementById("birthResult").innerText = birth;
    document.getElementById("genderResult").innerText = gender;
    document.getElementById("messageResult").innerText = message;

    // Reset Form (Opsional)
    // form.reset();
});

