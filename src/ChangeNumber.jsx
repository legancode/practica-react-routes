import React from 'react'
import useCounter from './CustomHooks/useCounter';

const ChangeNumber = () => {
    const counterOne = useCounter()
    const counterTwo = useCounter()
    return (
        <>
            <div>
                {counterOne.count}
                <button onClick={counterOne.increase}>Incrementar</button>
                <button onClick={counterOne.decrease}>Disminuir</button>
            </div>

            <div>
                {counterTwo.count}
                <button onClick={counterTwo.increase}>Incrementar</button>
                <button onClick={counterTwo.decrease}>Disminuir</button>
            </div>
        </>
    )
}

export default ChangeNumber
