let a = +prompt("Mời bạn nhập số a: ");
let b = +prompt("Mời bạn nhập số b: ");
let c = +prompt("Mời bạn nhập số c: ");
if(a===0) {
    alert("Không phải phương trình bậc 2");
} else{
    let delta = b**2-4*a*c;
    if(delta >0) {
        let x1 = (-b+Math.sqrt(delta))/ 2*a;
        let x2 = (-b-Math.sqrt(delta))/ 2*a;
        alert("Phương trình có 2 nghiệm phân biệt:\n x1=" +x1 +"\n x2=" +x2);
    } else if (delta === 0) {
        let x = -b/2*a;
        alert("Phương trình có nghiệm kép:\n x=" +x);
    } else {
        alert("Phương trình vô nghiệm");
    }
}