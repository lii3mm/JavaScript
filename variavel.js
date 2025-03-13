function exemploVar(){
    if(true){
        //definir as variáveis
        var x = 10;
        var y = 20;
        const z = 30;
    }
    console.log(x); //acessível
    console.log(y); //erro: y não está definido
    console.log(z); //erro: z não está definido
}