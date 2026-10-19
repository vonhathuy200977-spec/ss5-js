const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

const cleanAppointmentCode = rawAppointmentCode.trim();
const normalizedCode = cleanAppointmentCode.toUpperCase();
const isValidPrefix = normalizedCode.startsWith("MED-");
const departmentCode = cleanAppointmentCode.slice(4, 7);
const appointmentNumber = cleanAppointmentCode.slice(8, 12);
const formattedPatientName = cleanPatientName.trim().toUpperCase();
const isCodeValid = normalizedCode.startsWith("MED-");

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode.toUpperCase());
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);