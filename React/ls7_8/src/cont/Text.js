import { Component } from 'react'

class Text extends Component {

    state = {
        isShow: false
    }



    render() {
        let { isShow } = this.state;
        // console.log(this.state.isShow);
        console.log(isShow);

        return (
            <div>
                {/* <button onClick={() => this.setState({isShow: !isShow})}> SHOW \ HIDE </button> */}
                <button onClick={() => this.setState({isShow: !isShow})}> 
                    { isShow ? 'HIDE' : 'SHOW'}
                </button>


                {isShow && <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, asperiores possimus. Expedita, non accusamus dolores aspernatur dolore, dolorem fugit laudantium vero natus, est perferendis eum. Fugiat exercitationem natus sapiente amet.
                    Ut, rem! Modi pariatur beatae optio voluptatem laboriosam eius itaque sit deserunt reprehenderit molestias iusto a ab aperiam velit dolor expedita praesentium cumque tenetur ad provident sed, consequatur est vero!
                    Saepe aspernatur suscipit animi est odit doloribus inventore. Repellendus eaque quae esse deleniti suscipit nam neque. Adipisci perspiciatis ea doloribus nihil architecto maiores fuga libero voluptas at, molestias praesentium accusamus?
                    Eligendi ipsum, fugiat pariatur dolore nostrum perferendis ullam, debitis rerum accusantium, est molestias nisi error maiores quisquam. Itaque quo atque deserunt, expedita temporibus debitis, magni culpa minima a corrupti molestiae.
                </p>}


                <hr></hr>
                <hr></hr>

                <div>
                    dfsdlkf
                {false && <span>dsvmkls ksgk</span>}
                {true && <span>dsvmkls ksgk 2222</span>}
                {(true && false) && <span>dsvmkls ksgk 444</span>}
                {(true || false) && <span>dsvmkls ksgk 555</span>}
                </div>
            </div>
        )
    }
}

export default Text