import React from "react";

import Card from "./Card"

export default props => {
    const {num} = props
    const titulo = 'Sorteio de Números de 0 à ' + num

    const aleatorio = parseInt(Math.random() * (num))
    return (
        <Card title={titulo} purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>    
                </span>
            </div>
        </Card>
    )
}