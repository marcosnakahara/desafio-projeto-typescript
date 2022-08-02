let anyEstaDeVolta: any
anyEstaDeVolta = 3
anyEstaDeVolta = 'any'

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta

let unknownValor: unknown
unknownValor = 3
unknownValor = 'oi?'

let stringTest2: string = 'lá vem'
//stringTest2 = unknownValor

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)