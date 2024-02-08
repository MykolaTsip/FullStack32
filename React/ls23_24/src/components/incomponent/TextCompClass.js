import { Component } from 'react';

import { Counert } from '../../App';

export class TextCompClass extends Component {



    render () {


        return (
            <>
                <h2>
                    It is count
                </h2>
                <Counert.Consumer>
                    { (value) => (
                <p>
                    { value }
                </p>
                )}
                </Counert.Consumer>
            </>
        )
    }
}