let patientCard = " med-rhm-0815-bhyt "

let clearCard = patientCard.toUpperCase().trim()

let code = clearCard.slice(0,4)

let specialty = clearCard.slice(4,7)

let order 
if(specialty.includes("RHM")){
    order = "Răng Hàm Mặt"
}else if(specialty.includes("TAI")){
    order = "Tai Mũi Họng"
}else if(specialty.includes("MAT")){
    order = "Mắt"
}else{
    order = "Không tìm thấy khoa"
}

let cost = 150000
let discount = false
if(clearCard.endsWith("BHYT")){
    discount = true
    cost *= 0.2
}

console.log("=".repeat(35));
console.log(order);
console.log(String(discount));
console.log(String(cost));
console.log("=".repeat(35));




