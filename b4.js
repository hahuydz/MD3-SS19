let number = +prompt("Mời bạn nhập vào một số: ");
if (number % 3 && number % 5) {
    alert(`${number} chia hết cho cả 3 và 5`);
} else {
    alert(`${number} không chia hết cho cả 3 và 5`);
}