function externo() {
    console.log("Entrando na função externo");

    interno();

    console.log("Saindo da função externo");
}

function interno() {
    console.log("A função interno está sendo executada");

    debugger;

    console.log("Saindo da função interno");
}

externo();