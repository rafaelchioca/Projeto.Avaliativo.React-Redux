import React from "react";

import Card from "./Card"

export default props => {
    const {num} = props

    const dias = parseInt(10 + (num))
    return (
        <Card title='Está chegando...' green>
            <div>
                <span>
                    <span>Estarei em Recesso em {dias} dias</span>
                </span>
            </div>
        </Card>
    )
}