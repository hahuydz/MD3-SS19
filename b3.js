let choice = +prompt("Nhập 1 để đổi VND sang USD\nNhập 2 để đổi USD sang VND:");
let amount = +prompt("Nhập số tiền:");
if (choice == "1") {
    let usd = amount / 23000;
    alert(amount + " VND = " + usd + " USD");
} else if (choice == "2") {
    let vnd = amount * 23000;
    alert(amount + " USD = " + vnd + " VND");
} else {
    alert("Bạn nhập sai, vui lòng thử lại!");
}