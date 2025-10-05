// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// 1. IMPORT Router
const userRoutes = require('./routes/userRoutes');

// 2. MIDDLEWARE: cần để đọc dữ liệu JSON trong body của request (POST, PUT, PATCH)
app.use(express.json());

// 3. ĐỊNH TUYẾN GỐC: tất cả route trong userRoutes bắt đầu bằng /api/v1/users
app.use('/api/v1/users', userRoutes);

// 4. Route chào mừng (giữ nguyên)
app.get('/', (req, res) => {
  res.json({ message: "Chào mừng đến với API Dữ liệu Người dùng!" });
});

// 5. API kiểm tra trạng thái
app.get('/api/v1/status', (req, res) => {
  res.json({
    service: "User Data API",
    version: "1.0",
    health: "Good",
    timestamp: new Date().toISOString()
  });
});

// 6. Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
