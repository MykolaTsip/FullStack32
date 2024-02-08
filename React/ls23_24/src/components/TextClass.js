import { Component, createRef } from 'react';

import { Textincomp } from './incomponent/TextInComp';
import { TextCompClass } from './incomponent/TextCompClass';



export class TextClass extends Component {

    myText = createRef()

    render() {

        return (
            <>
               <p ref={this.myText}>
                    Lore4mdsgfddf dsgfdhgdf

                    <div>
                        <Textincomp/>
                    </div>

                    <hr/>

                    <div>
                        <TextCompClass/>
                    </div>
                </p> 
            </>
        )
    }

    componentDidMount() {
        console.log(this.myText, 'FROM CLASS');
    }
}