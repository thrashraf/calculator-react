import React from 'react'
import './Operation.scss'

export const Operation = (props) => {

    const operation = ['/', '+', '-', '*', '=']
    const operationRender = operation.map((op, index) => {
        return(
        <button onClick={props.getVal} key={index} value={op}>{op}</button>
        )
    })
    return (
        <div className="Op">
          {operationRender}  
        </div>
    )
}
