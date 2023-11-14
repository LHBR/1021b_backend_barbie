import FilmeRepositorioInterface from "./filme-repositorio-interface"

export default class ListaFilme{
    constructor(private filmeRepositorio:FilmeRepositorioInterface){}
    public async executar():Promise<Filme[]>{
        return this.filmeRepositorio.listar()
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}