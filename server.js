const express = require('express');
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Data dummy seolah-olah dari database
let obatList = [
    { id: 1, nama: 'Paracetamol', kategori: 'Analgesik', harga: 5000, stok: 100 },
    { id: 2, nama: 'Amoxicillin', kategori: 'Antibiotik', harga: 15000, stok: 50 },
    { id: 3, nama: 'Vitamin C', kategori: 'Suplemen', harga: 10000, stok: 200 }
];

// Root Endpoint - Welcome Message
app.get('/', (req, res) => {
    res.send('<h1>Selamat Datang di REST API Apotek!</h1><p>Gunakan endpoint <a href="/api/obat">/api/obat</a> untuk mengakses data obat.</p>');
});

// 1. GET - Mengambil semua data obat
app.get('/api/obat', (req, res) => {
    res.json({
        message: 'Berhasil mengambil semua data obat',
        data: obatList
    });
});

// 2. GET by Id - Mengambil data obat berdasarkan ID
app.get('/api/obat/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const obat = obatList.find(o => o.id === id);

    if (!obat) {
        return res.status(404).json({ message: 'Obat tidak ditemukan' });
    }

    res.json({
        message: 'Berhasil mengambil data obat',
        data: obat
    });
});

// 3. POST - Menambahkan data obat baru
app.post('/api/obat', (req, res) => {
    const { nama, kategori, harga, stok } = req.body;
    
    // Validasi sederhana
    if (!nama || !kategori || !harga || !stok) {
        return res.status(400).json({ message: 'Semua field (nama, kategori, harga, stok) harus diisi' });
    }

    const newId = obatList.length > 0 ? obatList[obatList.length - 1].id + 1 : 1;
    const newObat = { id: newId, nama, kategori, harga, stok };
    
    obatList.push(newObat);
    
    res.status(201).json({
        message: 'Obat berhasil ditambahkan',
        data: newObat
    });
});

// 4. PUT - Mengubah data obat yang sudah ada berdasarkan ID
app.put('/api/obat/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nama, kategori, harga, stok } = req.body;
    
    const index = obatList.findIndex(o => o.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Obat tidak ditemukan' });
    }

    // Update data (hanya update field yang dikirim)
    obatList[index] = {
        ...obatList[index],
        nama: nama || obatList[index].nama,
        kategori: kategori || obatList[index].kategori,
        harga: harga || obatList[index].harga,
        stok: stok !== undefined ? stok : obatList[index].stok
    };

    res.json({
        message: 'Data obat berhasil diperbarui',
        data: obatList[index]
    });
});

// 5. DELETE - Menghapus data obat berdasarkan ID
app.delete('/api/obat/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = obatList.findIndex(o => o.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Obat tidak ditemukan' });
    }

    const deletedObat = obatList.splice(index, 1);

    res.json({
        message: 'Obat berhasil dihapus',
        data: deletedObat[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server apotek berjalan di http://localhost:${PORT}`);
});
