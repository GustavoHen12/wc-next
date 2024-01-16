class Reserva {
    id: number;
    tamanho: string;
    quantidade: number;
    tipo: string;
    nome: string;
    preco: number;
    constructor(id: number, tamanho: string, quantidade: number, tipo: string, nome: string, preco: number) {
        this.id = id;
        this.tamanho = tamanho;
        this.quantidade = quantidade;
        this.tipo = tipo;
        this.nome = nome;
        this.preco = preco;
    }
}

export default Reserva;