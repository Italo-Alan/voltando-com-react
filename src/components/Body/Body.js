import React from 'react';
import Data from '../Data/Data';

const Body = () => {
    const meuNome = () => {
        return(
            "Italo Alan Feitoza Motta"
        );
    };

    const idade= 25;
    const lang = "React";

    const somar = (x, y) => {
        return x + y
    };

    return(
        <section>
            <h2>Reaprendendo React</h2>
            <p>Após aprender com consistência React partirei para Node.js</p>
            <Data
            nome={meuNome}
            idade={25}
            lang={lang}
            somar={somar}
            />
        </section>
    )
}

export default Body;