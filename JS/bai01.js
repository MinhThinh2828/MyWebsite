function daoNguocChuoi(chuoi) {
    return chuoi.split('').reverse().join('');
}

// Ví dụ sử dụng hàm
const ketQua = daoNguocChuoi("hello");
console.log(ketQua);  // Kết quả: olleh
