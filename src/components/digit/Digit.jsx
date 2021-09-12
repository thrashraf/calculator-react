import React from 'react'
import './Digit.scss'

export const Digit = (props) => {

  const digit = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'DEL']

  const digitRender = digit.map((digit, index) => {
    return(
        <button onClick={props.getVal} key={index} value={digit}>{digit}</button>
    )
  })

    return (
        <div className="Digit">
            {digitRender}
        </div>
    )
}
