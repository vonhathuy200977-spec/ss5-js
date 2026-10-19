| Trường hợp kiểm thử                    | Dữ liệu đầu vào      | Kết quả sai thực tế                                                 | Kết quả đúng mong đợi        |
| -------------------------------------- | -------------------- | ------------------------------------------------------------------- | ---------------------------- |
| TC01 - Mã viết thường, có khoảng trắng | `"  med-nhi-1024  "` | `isValidPrefix = false` do kiểm tra `"MED-"` trên chuỗi viết thường | `isCodeValid = true`         |
| TC02 - Số thứ tự 4 chữ số              | `"  med-nhi-1024  "` | Nếu dùng `slice(8, 11)` → `"102"` (thiếu `4`)                       | `appointmentNumber = "1024"` |
