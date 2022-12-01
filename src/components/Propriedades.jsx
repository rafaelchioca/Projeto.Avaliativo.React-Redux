import React from "react";

import Card from "./Card"

export default props => {
    const {num} = props
    
    return (
        <Card title={props.titulo} yellow>
            <div>
                <span>
                    <span className='aluno'>{props.aluno} sua nota é </span>
                    <span>{num}</span>
                </span>
            </div>
        </Card>
    )
}