# JavaScript String — Mindmap

## 1. Bản chất chuỗi & Tính bất biến

- String
  - Primitive
  - Immutability
    - Không thay đổi chuỗi gốc
    - Phương thức trả về chuỗi mới
    - Phải gán lại kết quả
  - Indexing
    - Bắt đầu từ `0`
    - Kết thúc tại `length - 1`
    - Truy cập: `str[index]`
  - `.length`
    - Trả về số ký tự
    - Không phải method

## 2. Tìm kiếm & Kiểm tra

- `.indexOf()`
  - Tìm vị trí xuất hiện
  - Không tìm thấy → `-1`
- `.includes()`
  - Kiểm tra chuỗi con
  - Kết quả `true` hoặc `false`
- `.startsWith()`
  - Kiểm tra tiền tố
- `.endsWith()`
  - Kiểm tra hậu tố

## 3. Biến đổi & Trích xuất

- `.slice(start, end)`
  - Cắt chuỗi
  - Không lấy `end`
  - Hỗ trợ chỉ số âm
- `.substring(start, end)`
  - Cắt chuỗi
  - Không hỗ trợ chỉ số âm
- `.trim()`
  - Xóa khoảng trắng đầu/cuối
- `.toUpperCase()`
  - Chuyển thành chữ hoa
- `.toLowerCase()`
  - Chuyển thành chữ thường
- `.split(separator)`
  - Tách chuỗi thành Array

## 4. Thay thế & Căn lề

- `.replace(old, new)`
  - Thay lần xuất hiện đầu tiên
- `.replaceAll(old, new)`
  - Thay tất cả lần xuất hiện
- `.repeat(count)`
  - Lặp lại chuỗi
- `.padStart(length, value)`
  - Thêm ký tự vào đầu
- `.padEnd(length, value)`
  - Thêm ký tự vào cuối

## 5. Template Literals

- Backticks
  - Dùng dấu `` `...` ``
- Nội suy
  - Cú pháp `${expr}`
  - Chèn biến vào chuỗi
  - Chèn biểu thức vào chuỗi
- Multiline
  - Hỗ trợ chuỗi nhiều dòng
- Ứng dụng
  - In thông tin
  - Tạo nội dung động
  - Định dạng phiếu Kiosk

## 6. Cạm bẫy thường gặp

- Quên gán lại
  - `str.trim()` không đổi `str`
  - `str.toUpperCase()` không đổi `str`
  - `str.replace()` không đổi `str`
- Nhầm index
  - Index bắt đầu từ `0`
  - `slice()` không lấy vị trí `end`
- Chỉ số âm
  - `slice(-1)` → ký tự cuối
  - `slice(-3)` → 3 ký tự cuối

## 7. Ứng dụng thực tế

- Kiosk phòng khám
  - `trim()` → làm sạch mã
  - `toUpperCase()` → chuẩn hóa mã
  - `startsWith()` → kiểm tra tiền tố
  - `slice()` → lấy mã khoa
  - `split()` → bóc tách dữ liệu
  - `replaceAll()` → định dạng hiển thị
  - Template Literals → in phiếu