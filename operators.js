// Arithmetic Operator
function add(a, b) {
  const sum = a + b;
  return sum;
}
function sub(a, b) {
  const sum = a - b;
  return sum;
}
function mul(a, b) {
  const sum = a*b;
  return sum;
}
function div(a, b) {
  const sum = a/b;
  return sum;
}
function exp(a, b) {
  const sum = a**b;
  return sum;
}
function rem(a,b){
    const sum = a%b;
    return sum;
}
console.log("Sum of Two no is:",add(7,5));
console.log("sub of Two no is:",sub(7,5));
console.log("product of Two no is:",mul(7,5));
console.log("Quotient of Two no is:",div(7,5));
console.log("Exponent of Two no is:",exp(2,5));
console.log("Remainder of Two no is:",rem(7,5));


// Logical Operator

function and(a, b) {
  const sum = a&b;
  return sum;
}
function Or(a, b) {
  const sum = a|b;
  return sum;
}
function not(a ) {
  const sum = ~a;
  return sum;
}
function Xor(a, b) {
  const sum = a^b;
  return sum;
}
function LShift(a, b) {
  const sum = a<< b;
  return sum;
}
function Rshift(a, b) {
  const sum = a>> b;
  return sum;
}
console.log("Bitwise and  of Two no is:",and(7,5));
console.log("OR operation  of Two no is:",Or(7,5));
console.log("Not operation  of  no is:",not(7));
console.log("Lshift of  no is:",LShift(7,5));
console.log("Rshift of Two no is:",Rshift(9,5));

// Bitwise operator

function BitAnd(a,b){
    const sum = a>5&&b<3;
    return sum;
}
function BitOr(a,b){
        const sum = a>1||b<0;
        return sum;
}
function Bitnot(a)
{
    const sum = !a;
    return sum;
}
function Nullify(a,b){
    const sum =a??b;
    return sum;
}
console.log("BitAnd of Two no is:",BitAnd(9,5));
console.log("BitOr of Two no is:",BitOr(9,5));
console.log("Bitnot of Two no is:",Bitnot(9,5));
console.log("Nullify of Two no is:",Nullify(0,5));

// Assignment Operator.
function Assign(a) {
    const sum = a++;
    return sum;
  }
  function Assign1(a) {
    return  a+=5;
    
  }
  function Assign2(a) {
    return a-=5;
    ;
  }

  console.log("Nullify of Two no is:",Assign(5));
  console.log("Nullify of Two no is:",Assign1(5));
  console.log("Nullify of Two no is:",Assign2(5));

// Comparison Operator.
function greaterthan(a, b) {
    const sum = a>b;
    return sum;
  }
  function lessthan(a, b) {
    const sum = a<b;
    return sum;
  }
  function Equal2(a, b) {
    const sum = a==b;
    return sum;
  }
  function NotEqual2(a, b) {
    const sum = a!=b;
    return sum;
  }
  function SEq2(a, b) {
    const sum = a===b;
    return sum;
  }
  
console.log("Comparison of two no:",greaterthan(15,7));
console.log("Comparison of two no:",lessthan(15,7));
console.log("Comparison of two no:",Equal2(5,7));
console.log("Comparison of two no:",NotEqual2(15,7));
console.log("Comparison of two no:",SEq2("7",7));



// Unary operator.

function Inc(a) {
    const sum = ++a;
    return sum;
  }
  function Dec(a) {
    const sum = --a;
    return sum;
  }
  function Unary1(a) {
    const sum = -a;
    return sum;
  }
  function Unary2(a) {
    const sum = +a;
    return sum;
  }
  
console.log("Increment of  no :",Inc(5));
console.log("Decrement of  no :",Dec(5));
console.log("Unary1  no :",Unary1(5));
console.log("Unary2  no :",Unary2(5));
