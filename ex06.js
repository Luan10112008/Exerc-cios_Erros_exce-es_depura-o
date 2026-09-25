function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    }
}

console.log(safeParse('{"nome": "Leandromeda"}'));
console.log(safeParse("texto inválido"));