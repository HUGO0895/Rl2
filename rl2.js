function Cliente(nome,telefoneCelular,email,endereco){
         this.nome=nome,
         this.telefoneCelular=telefoneCelular,
         this.email=email,
         this.endereco=endereco
         this.descricao=()=>{
            return "---------------"+'\n'+
             "Informações do Cliente:"+'\n'+
             this.nome+'\n'+
             "---------------"+'\n'+
             "---------------"+'\n'+
             "Telefone:"+'\n'+
             "DDD:"+this.telefoneCelular.ddd+'\n'+
             "Número:"+this.telefoneCelular.numero+'\n'+
             "---------------"+'\n'+
             "Endereço:"+'\n'+
             "Rua:"+this.endereco.rua+'\n'+
             "Número:"+this.endereco.numero+'\n'+
             "Cidade:"+this.endereco.cidade+'\n'+
             "Estado:"+this.endereco.estado



         }

}

function TelefoneCelular(ddd,numero){
       this.ddd=ddd,
       this.numero=numero
}

function Endereco(rua,numero,cidade,estado){
    this.rua=rua,
    this.numero=numero,
    this.cidade=cidade,
    this.estado=estado

}
let nTelefone=new TelefoneCelular("11","99999999")
let endereco=new Endereco('AV. Paulista','987',"São Paulo","SP") //BatataPlalha//
let cliente= new Cliente("Jonathan Calleri",nTelefone,"callerinho0908@gmail.com",endereco)

function ordenarArrayClietnes(arrayCli){
      return arrayCli.toSorted((a,b)=>a.nome<b.nome ? -1:a.nome<b.nome ? 1:0)
}
console.log(cliente.descricao()+'\n')



let nTelefone2 = new TelefoneCelular("11", "988887777");
let nTelefone3 = new TelefoneCelular("21", "977775555");
let nTelefone4 = new TelefoneCelular("31", "966663333");
let nTelefone5 = new TelefoneCelular("41", "955551111");
let nTelefone6 = new TelefoneCelular("81", "944442222");


let endereco2 = new Endereco('Rua Augusta', '123', "São Paulo", "SP");
let endereco3 = new Endereco('Av. Atlântica', '500', "Rio de Janeiro", "RJ");
let endereco4 = new Endereco('Av. Afonso Pena', '1500', "Belo Horizonte", "MG");
let endereco5 = new Endereco('Rua das Flores', '45', "Curitiba", "PR");
let endereco6 = new Endereco('Av. Boa Viagem', '789', "Recife", "PE");


let cliente2 = new Cliente("Luciano", nTelefone2, "luciano10@gmail.com", endereco2);
let cliente3 = new Cliente("Gabriel Neves", nTelefone3, "g.neves@gmail.com", endereco3);
let cliente4 = new Cliente("Rafael", nTelefone4, "rafael.33@gmail.com", endereco4);
let cliente5 = new Cliente("Alisson", nTelefone5, "alisson.euro@gmail.com", endereco5);
let cliente6 = new Cliente("Wellington Rato", nTelefone6, "w.rato@gmail.com", endereco6);

let array_C=[cliente,cliente2,cliente3,cliente4,cliente5,cliente6]

let array_Ordenado=ordenarArrayClietnes(array_C)

console.log("Array Ordenado de Clientes")
console.log(array_Ordenado)


