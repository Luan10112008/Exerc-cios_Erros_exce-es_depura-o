function soma(a, b) {
    console.log("Antes da soma:", a, b);

    let resultado = a + b;

    console.log("Depois da soma:", resultado);

    return resultado;
}

console.log(soma(2, undefined));

// A causa do resultado NaN é que b recebeu undefined.
// Ao realizar 2 + undefined, o resultado é NaN.