const appointmentInfo = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

// Tách chuỗi
const data = appointmentInfo.split("-");

const rawDoctor = data[0];
const rawDepartment = data[1];
const appointmentTime = data[2];
const rawRoom = data[3];

// Chuẩn hóa tên bác sĩ
let doctorName = rawDoctor
    .replace("BS.", "")
    .replaceAll("_", " ")
    .toLowerCase();

let doctorParts = doctorName.split(" ");

for (let i = 0; i < doctorParts.length; i++) {
    doctorParts[i] =
        doctorParts[i].slice(0, 1).toUpperCase() +
        doctorParts[i].slice(1);
}

doctorName = doctorParts.join(" ");

// Chuẩn hóa chuyên khoa
const department = rawDepartment
    .replaceAll("_", " ")
    .toLowerCase();

const departmentName = department
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");

// Chuẩn hóa phòng khám
const roomNumber = rawRoom
    .replace("PHONG_", "");

const roomName = "Phòng " + roomNumber;

// In bảng phân công
console.log(`
========================================
        PHÂN CÔNG CA KHÁM
========================================
Bác sĩ      : ${doctorName}
Chuyên khoa : ${departmentName}
Giờ khám    : ${appointmentTime}
Phòng khám  : ${roomName}
========================================
`);