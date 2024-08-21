let balance = 0;
const spinCost = 800; // Biaya untuk setiap spin

document.getElementById('spin-button').addEventListener('click', spin);
document.getElementById('deposit-button').addEventListener('click', deposit);
document.getElementById('withdraw-button').addEventListener('click', withdraw);

function spin() {
    if (balance >= spinCost) {
        // Kurangi saldo dengan biaya spin
        balance -= spinCost;

        // Memutar reel dan menghitung hasil
        let reel1 = Math.floor(Math.random() * 5) + 1;
        let reel2 = Math.floor(Math.random() * 5) + 1;
        let reel3 = Math.floor(Math.random() * 5) + 1;

        document.getElementById('reel1').textContent = reel1;
        document.getElementById('reel2').textContent = reel2;
        document.getElementById('reel3').textContent = reel3;

        // Memainkan suara spin
        document.getElementById('spin-audio').play();

        // Reset background ke warna semula jika sebelumnya menang
        document.body.style.backgroundColor = '#333';

        // Cek apakah pemain menang
        if (reel1 === reel2 && reel2 === reel3) {
            balance += 100000; // Hadiah jika menang
            document.getElementById('win-audio').play();
            alert('Selamat! Anda Mendapatkan Scater');
            // Ganti warna background saat menang
            document.body.style.backgroundColor = '#4CAF50'; // Warna hijau sebagai contoh
        }
    } else {
        alert('Insufficient balance to spin.');
    }

    updateBalance();
}

function deposit() {
    let amount = prompt('Silahkan masukan jumlah nominal deposit');
    if (amount) {
        balance += parseInt(amount);
        document.getElementById('click-audio').play();
        updateBalance();
    }
}

function withdraw() {
    let amount = prompt('Masukkan jumlah yang ingin ditarik:');
    if (amount && amount <= balance) {
        balance -= parseInt(amount);
        document.getElementById('click-audio').play();
        updateBalance();
    } else {
        alert('Saldo anda tidak mencukupi.');
    }
}

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}