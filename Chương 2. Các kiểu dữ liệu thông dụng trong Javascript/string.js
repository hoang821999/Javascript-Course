//String (chuỗi)
//“Hello world”;
//‘My name is Hoang’;
//`I am Viet Hoang`;
// double quotes (“abc”); single quote (‘abc’); backticks (template literal) (`abc`);

const name = "Hoang";
console.log(name);
console.log(typeof name); //xem kiểu dữ liệu gì ?

const newStr = "My name is Viet Hoang and I am BE";
console.log(newStr);

const newStr2 = "My name is " + name + " and I am BE";
console.log(newStr2);

//Hoặc có thể dùng: //${variable}
const newStr3 = `My name is ${name} and I am Designer`;
console.log(newStr3);

//Split cắt string
const myStr = "Le Mai Viet Hoang";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));
console.log(myStr.toLocaleLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Le")); // kiểm tra chữ cái đầu
console.log(myStr.endsWith("Hoang")); // kiểm tra chữ cuối
console.log(myStr.includes("Viet")); // kiểm tra có chứa chữ đó không ?
console.log(myStr.indexOf("a")); //4
console.log(myStr.lastIndexOf("a")); //14