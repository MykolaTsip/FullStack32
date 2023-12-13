import {Component} from 'react'

class Counter extends Component {
    
    state = {
        isShow: true,
        count: 0
    }


    plus = () => {
        // this.state.count =+ 1;
        // this.setState({count: this.state.count + 1})
        this.setState((state, props) => ({count: state.count + 1}))
        console.log(this.state);
    }

    minus = () => {
        this.setState({count: this.state.count - 1})
        console.log(this.state);
    }


    render() {
        const {count} = this.state;

        return (<div>
            <h3> Counter: </h3>

            <button onClick={this.plus}> PLUS </button>
            <b> Count is: {count} </b>
            <button onClick={this.minus}> MINUS </button>

        </div>)
    }


    // state = {
    //     isShow: true
    // }

    // isHide = () => {
    //     this.setState({ isShow: !this.state.isShow });
    // }

    // render() {
    //     const { isShow } = this.state;

    //     return (
    //         <div>
    //             <button onClick={this.isHide}>
    //                 SHow\Hide
    //             </button>
    //             {isShow && <div> My text </div>}
    //         </div>
    //     )
    // }
}

export default Counter;