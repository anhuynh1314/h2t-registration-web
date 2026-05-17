export default function handler(req, res) {
  res.destroy(); // Ngắt kết nối ngay lập tức để tạo lỗi 502
}