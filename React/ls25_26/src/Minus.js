import { connect } from 'react-redux';

import { Minus as MinusAc, SetZero } from '../store/actions'


function Minus({count, }) {

    // const mn = () => {

    // }

    return (
        <>
            {/* <p onClick={}> Data is: { count } </p> */}
            <hr/>
            {/* <button onClick={minusO}> MINUS </button> */}

        </>
    )
}

// const mapStateToProps = ({ count }) => ({ count });

// const mapDispatchToProps = (dispatch) => ({ minusO: () => dispatch(M()), setZero: () => dispatch(O()) }) 

// export default connect(mapStateToProps, mapDispatchToProps)(Minus);

const mapStateToProps = ({count}) => ({count})
const mapDispatchToProps = () => ({
    MinusAc,
    SetZero
})

export default connect()(Minus)