import { Component } from 'react'
import PropTypes from 'prop-types'


class Phone extends Component {

    Phone

    constructor (props) {
        super()

        console.log(props);

        this.Phone = props
    }


    render() {
        const {name, model, memory, cpu} = this.Phone

        return (<div>
            <h2> {name} </h2>
            <div>
                Model: {model}
            </div>
            <div>
                Memory: {memory}
            </div>
            <div>
                CPU: {cpu}
            </div>
        </div>)
    }

}

Phone.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    memory: PropTypes.number,
    cpu: PropTypes.number,
}

Phone.defaultProps = {
    name: 'No Phone',
    model: 'No model',
    memory: 0,
    cpu: 0
}

export default Phone