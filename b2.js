let char = prompt("Mời bạn nhập vào một ký tự: ");
if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
    alert(`Ký tự ${char} là chữ cái`);
} else {
    alert(`Ký tự ${char} không phải là chữ cái`);
}