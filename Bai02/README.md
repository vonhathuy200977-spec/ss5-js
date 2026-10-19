| Trường hợp kiểm thử                     | Dữ liệu đầu vào            | Kết quả sai thực tế                                                                    | Kết quả đúng mong đợi                                    |
| --------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| TC01 - Mã có khoảng trắng và chữ thường | `"   med-card-0428-ut   "` | Mã hợp lệ: `false`, Khoa điều trị: `ed-`, Ưu tiên: `false`                             | Mã hợp lệ: `true`, Khoa điều trị: `car`, Ưu tiên: `true` |
| TC02 - Kiểm tra chuỗi sau khi chuẩn hóa | `"   med-card-0428-ut   "` | `replaceAll()` xử lý chuỗi chưa được làm sạch → kết quả vẫn chứa khoảng trắng đầu/cuối | Chuỗi được `trim()` + `toUpperCase()` trước khi xử lý    |

