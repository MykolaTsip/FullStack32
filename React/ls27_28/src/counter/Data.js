// import { connect } from 'react-redux';


function Data({count}) {
    
    console.log(count);


    return (
        <div>
            { count }
        </div>
    )
}

// const mapStateFromProps = (state) => ({
//     count: state.count
// })

// export default connect(mapStateFromProps)(Data);
