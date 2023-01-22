import React from "react";

//props são atributos que serão passados para esse componente
const Data = (props) => {
    const nome = "Italo Alan"
    const idade = 25
    const lang = "React"

    const x = 25;
    const y = 15;

    

    return(
        /*Caso queiramos passar uma função no lugar de uma variável, precisamos declarar junto aos props  */
        /*Por meio dos props declaramos se receberá função ou variável, usando o nome do ATRIBUTO*/
        <section>
            <p>Nome: {props.nome()}</p>
            <p>Idade: {idade}</p>
            <p>Linaguagem: {lang}</p>
            <p>Soma: {props.somar(x, y)}</p>
        </section>
    )
};

export default Data;