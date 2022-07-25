function add(n1, n2, print, content) {
    if (print) {
        console.log(content + (n1 + n2));
    }
    return n1 + n2;
}
var num1 = 2;
var num2 = 3;
var print1 = true;
var content = 'The sum of Two number is=';
var result = add(num1, num2, print1, content);
console.log(result);
