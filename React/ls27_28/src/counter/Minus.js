import { connect } from 'react-redux';

import { Minus as MinusAc, SetZero } from '../store/actions'


function Minus({count, MinusAc, SetZero}) {

    // const mn = () => {

    // }

    console.log({count, MinusAc, SetZero});
    return (
        <>
            <p onClick={SetZero}> Data is: { count } </p>
            <hr/>
            <button onClick={MinusAc}> MINUS </button>

        </>
    )
}

// const mapStateToProps = ({ count }) => ({ count });

// const mapDispatchToProps = (dispatch) => ({ minusO: () => dispatch(M()), setZero: () => dispatch(O()) }) 

// export default connect(mapStateToProps, mapDispatchToProps)(Minus);

const mapStateToProps = ({dataCount}) => ({count: dataCount.count});

const mapDispatchToProps = {
    MinusAc,
    SetZero
}

export default connect(mapStateToProps, mapDispatchToProps)(Minus)