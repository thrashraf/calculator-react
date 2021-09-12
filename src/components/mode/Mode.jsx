import React from 'react';
import './Mode.scss'

export const Mode = (props) => {

    const mode = ['C', '()', '%']

    const modRender = mode.map((mod, index) => {
        return(
          <button onClick={props.getVal} key={index} value={mod}>{mod}</button>
        )
      })

    return (
        <div className="Mode">
            {modRender}
        </div>
    )
}
