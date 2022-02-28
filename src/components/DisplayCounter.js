
import { connect } from 'react-redux'

function DisplayCounter(props) {

    return(
        <div>
            <h1>Display Counter</h1>
            <h2>{props.ctr}</h2>
        </div>
    )


}

// map global state to local properties
const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        books: state.books
    }
}

export default connect(mapStateToProps)(DisplayCounter)