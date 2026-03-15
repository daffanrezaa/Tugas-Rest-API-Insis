# Apotek REST API

Ini adalah proyek contoh REST API sederhana untuk manajemen data obat di sebuah apotek, dibuat menggunakan Node.js dan Express.js. API ini tidak terhubung ke database nyata (menggunakan array in-memory) sehingga cocok untuk tujuan pembelajaran.

## Fitur (Endpoints)

Base URL: `http://localhost:3000/api/obat`

1.  **Mendapatkan Semua Obat (`GET /`)**
    *   Deskripsi: Mengambil seluruh daftar obat yang tersedia.
2.  **Mendapatkan Obat Berdasarkan ID (`GET /:id`)**
    *   Deskripsi: Mengambil detail spesifik dari satu obat.
3.  **Menambahkan Obat Baru (`POST /`)**
    *   Deskripsi: Menambah data obat baru ke dalam sistem.
    *   Body (JSON): `nama`, `kategori`, `harga`, `stok`.
4.  **Memperbarui Data Obat (`PUT /:id`)**
    *   Deskripsi: Mengubah informasi obat yang sudah ada.
    *   Body (JSON): (Opsional) `nama`, `kategori`, `harga`, `stok`.
5.  **Menghapus Obat (`DELETE /:id`)**
    *   Deskripsi: Menghapus data obat dari sistem.

## Struktur Direktori

```text
/
├── images/        # Folder untuk menyimpan aset gambar/dokumentasi
├── .gitignore     # Daftar file dan folder yang diabaikan oleh Git
├── package.json   # Konfigurasi proyek dan dependensi
├── README.md      # Dokumentasi proyek (file ini)
└── server.js      # File utama aplikasi yang berisi logika API
```

## Cara Menjalankan

1. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/).
2. Buka terminal di direktori proyek ini.
3. Jalankan perintah berikut untuk menginstal dependensi:
   ```bash
   npm install
   ```
4. Jalankan server:
   ```bash
   npm start
   ```
5. Server akan berjalan di `http://localhost:3000/`. Anda bisa mengujinya menggunakan Postman, Insomnia, atau Thunder Client.

## Dokumentasi (Images)

(Anda dapat menyimpan screenshot hasil pengujian API seperti dari Postman di dalam folder `images/` ini)
