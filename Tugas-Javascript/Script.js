let nama = "";
let jumlahPilihan = 0;
let daftarPilihan = [];

function buatPilihan() {
    nama = document.getElementById("nama").value.trim();
    jumlahPilihan = parseInt(
        document.getElementById("jumlah").value
    );
    if (nama === "") {
        alert("Nama harus diisi!");
        return;
    }
    if (isNaN(jumlahPilihan) || jumlahPilihan < 1) {
        alert("Jumlah pilihan harus berupa angka minimal 1!");
        return;
    }

    let html = "<h3>Masukkan Pilihan</h3>";
    for (let i = 1; i <= jumlahPilihan; i++) {
        html += `
            <div class="pilihan-item">
                <label>Pilihan ${i} :</label>
                <input 
                    type="text"
                    id="pilihan${i}"
                    placeholder="Masukkan teks pilihan ${i}"
                >
            </div>
        `;
    }
    html += `
        <button onclick="simpanPilihan()">OK</button>
    `;

    document.getElementById("inputPilihan").innerHTML = html;
    document.getElementById("pilihPilihan").innerHTML = "";
    document.getElementById("inputEmail").innerHTML = "";
    document.getElementById("hasil").innerHTML = "";
}

function simpanPilihan() {
    daftarPilihan = [];
    for (let i = 1; i <= jumlahPilihan; i++) {
        let pilihan = document
            .getElementById("pilihan" + i)
            .value
            .trim();
        if (pilihan === "") {
            alert("Pilihan " + i + " harus diisi!");
            return;
        }
        daftarPilihan.push(pilihan);
    }
    let html = "<h3>Pilihan :</h3>";
    for (let i = 0; i < daftarPilihan.length; i++) {
        html += `
            <div class="radio-item">
                <label>
                    <input
                        type="radio"
                        name="pilihan"
                        value="${i}"
                        onclick="pilihanDipilih()"
                    >
                    ${daftarPilihan[i]}
                </label>
            </div>
        `;
    }
    document.getElementById("pilihPilihan").innerHTML = html;
    document.getElementById("inputEmail").innerHTML = "";
    document.getElementById("hasil").innerHTML = "";
}
function pilihanDipilih() {
    let html = `
        <h3>Masukkan Email</h3>
        <div class="form-group">
            <label for="email">Email :</label>

            <input
                type="email"
                id="email"
                placeholder="contoh@email.com"
            >
        </div>
        <button onclick="tampilkanHasil()">OK</button>
        <p id="errorEmail" class="error"></p>
    `;
    document.getElementById("inputEmail").innerHTML = html;
}
function tampilkanHasil() {
    let email = document
        .getElementById("email")
        .value
        .trim();
    let errorEmail = document.getElementById("errorEmail");
    if (email === "") {
        errorEmail.innerHTML = "Email harus diisi!";
        return;
    }

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!polaEmail.test(email)) {
        errorEmail.innerHTML = "Format email tidak valid!";
        return;
    }

    let radio = document.querySelector(
        'input[name="pilihan"]:checked'
    );

    if (radio === null) {
        alert("Silakan pilih salah satu pilihan!");
        return;
    }
    let nomorPilihan = parseInt(radio.value);
    let pilihanYangDipilih = daftarPilihan[nomorPilihan];
    let semuaPilihan = "";

    for (let i = 0; i < daftarPilihan.length; i++) {
        if (i === daftarPilihan.length - 1) {
            semuaPilihan += "dan " + daftarPilihan[i];
        } else {
            semuaPilihan += daftarPilihan[i] + ", ";
        }
    }
    let hasil = `
        <h3>Hasil</h3>
        <p>
            Hallo, nama saya ${nama},
            email ${email} saya mempunyai
            sejumlah ${jumlahPilihan} pilihan yaitu
            ${semuaPilihan}, dan saya memilih
            ${pilihanYangDipilih}.
        </p>
    `;
    document.getElementById("hasil").innerHTML = hasil;
}