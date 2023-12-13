import { Component, PureComponent } from 'react';


export class User extends Component {

    interr = setInterval(() => {
        console.log(1)
        this.forceUpdate()
    }, 3000)

    constructor(props) {
        super()

        // console.log(props);
        console.log('constructor');
        this.state = props
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState);
        console.log('shouldComponentUpdate');

        // return false
        // return true

        return nextState.age !== this.state.age;
        // return nextProps !== this.props;
    }


    addAge = () => {
        this.setState((st) => ({age: st.age + 1}));
    }

    setTwo = () => {
        this.setState((st) => ({age: 2}));
    }

    render () {
        console.log('render');
        const {id, name, username, email, age} = this.state;

        return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>age: {age} </div>
            <div>username: {username}</div>
            <div>email: {email}</div>

            <button onClick={this.addAge}> Add 1 year </button>
            <button onClick={this.setTwo}> SET 2 </button>
        </div>)
    }

    getSnapshotBeforeUpdate(f) {
        // console.log(f);
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log(
            'componentDidUpdate'
        );
        // console.log(this.state);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interr)
    }
}