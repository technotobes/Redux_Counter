
import { connect } from 'react-redux'

function Counter(props) {



    const handleIncrement = () => {
        props.onIncrement()
    }

    const handleDecrement = () => {
        props.onDecrement()
    }


    return(
        <div>
            <h1>Increment and Decrement</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
    }
}


export default connect(null, mapDispatchToProps)(Counter)