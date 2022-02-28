import { connect } from 'react-redux'

import React, { useState } from 'react'

function Counter(props) {

    const [value, setValue] = useState('')
    

    const handleTextChange = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(value))
    }

    const handleSubtract = () => {
        props.onSubtract(parseInt(value))
    }

    return(
        <div>
            <h1>Add and Subtract</h1>

            <input type = "text" onChange = {handleTextChange}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({type:'ADD', payload:value}),
        onSubtract: (value) => dispatch({type: 'SUBTRACT', payload:value})
    }
}


export default connect(null, mapDispatchToProps)(Counter)