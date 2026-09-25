function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    } finally {
        console.log("Parse attempt finished");
    }
}

console.log(safeParse('{"nome": "Leandromeda"}'));
console.log(safeParse("texto inválido"));