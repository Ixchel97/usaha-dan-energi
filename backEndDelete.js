// server.js
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();
const port = 5000;

// Inisialisasi Firebase Admin SDK
const serviceAccount = require('./usaha-dan-energi-firebase-adminsdk-5hiwu-5a6f17175b.json'); // Ganti dengan path ke file konfigurasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://usaha-dan-energi.firebaseio.com' // Ganti dengan URL database Firebase Anda
});
app.use(cors());
// Endpoint untuk menghapus pengguna
app.delete('/deleteUser/:uid', async (req, res) => {
  const uid = req.params.uid;
  try {
    await admin.auth().deleteUser(uid);
    res.status(200).json({ message: 'User berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat menghapus pengguna.' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
const allowedOrigins = ['http://localhost:3000', 'http://example.com'];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Akses ditolak oleh kebijakan CORS'));
      }
    }
  })
);