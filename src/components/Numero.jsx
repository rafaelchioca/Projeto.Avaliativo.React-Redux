import "./Numero.css"
import React from "react"

import Card from "./Card"

export default props => {
    const {num} = props
    return  (
        <Card title="Escolha um número:" blue>
            <div className="numero">
                <span>
                    Número:
                    <input type="number" value={num} onChange={e => props.onNumChanged(+e.target.value)} />
                </span>   
            </div>
        </Card>
    )
}