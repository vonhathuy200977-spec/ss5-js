const rawTicketCode = "   med-card-0428-ut   ";

const cleanTicketCode = rawTicketCode.trim();
const normalizedTicketCode = cleanTicketCode.toUpperCase();

const isValidPrefix = normalizedTicketCode.startsWith("MED-");

const departmentCode = normalizedTicketCode.slice(4, 7);

const isPriority = normalizedTicketCode.includes("-UT");

const displayCode = normalizedTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Phiếu ưu tiên:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);