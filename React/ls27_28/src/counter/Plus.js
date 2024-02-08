// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { Plus as Plu } from '../store/actions';

function Plus() {

    // console.log();
    // const pl = () => {
    //     // addOne(P());
    //     addOne()
    // }

    const state = useSelector(state => state.dataCount.count);
    console.log(state);

    const dispatch = useDispatch()

    return (
        <>
            <hr/>
            <button onClick={() => dispatch(Plu())}> PLUS </button>
            <p> { state } </p>
            <hr/>

        </>
    )
}

export default Plus;

// // const mapStateToProps = () => ({});
// const mapDispatchToProps = (dispatch) => ({
//     // addOne: action => dispatch(action)
//     addOne: () => dispatch(P())
// })

// export default connect(null, mapDispatchToProps)(Plus);