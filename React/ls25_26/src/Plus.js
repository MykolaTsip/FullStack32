// import { connect } from 'react-redux';

function Plus({addOne}) {

    // console.log();
    // const pl = () => {
    //     // addOne(P());
    //     addOne()
    // }

    return (
        <>
            <button onClick={addOne}> PLUS </button>
        </>
    )
}

// // const mapStateToProps = () => ({});
// const mapDispatchToProps = (dispatch) => ({
//     // addOne: action => dispatch(action)
//     addOne: () => dispatch(P())
// })

// export default connect(null, mapDispatchToProps)(Plus);