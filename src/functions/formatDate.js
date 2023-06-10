const formatDate = (data, time=false) => {
    if(time){
        const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(',');
        return formated
    }else{
        const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(' ');
        return formated;
    }
}

export default formatDate;