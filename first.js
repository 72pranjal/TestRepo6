var b = document.getElementById('addbtn');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    var a = num1 + num2;
    var ele = document.getElementById('dd');
    ele.innerHTML = a.toString();
    // resetthevalue();
    return a;
}
b === null || b === void 0 ? void 0 : b.addEventListener('click', function () {
    // e.preventDefault();
    // let a= +input1.value+ +input2.value;
    // let element=document.getElementById('dd')!;
    // element.textContent=a.toString();
    console.log(add(+input1.value, +input2.value));
});
function resetthevalue() {
    var ele = document.getElementById('dd');
    ele.innerHTML = '';
}
