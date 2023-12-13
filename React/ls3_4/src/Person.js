import React from "react";

import  { F }  from "./Fff/F";

const ff = 'dfdfd'

function Perr (props) {

    console.log(props, props.children);
    console.log(<F></F>);

    return (
        <div>
            <div>
                DDDDDD - {props.data}
            </div>
            <div>
                gfgf
            </div>
            <div>
                {ff}
            </div>
            <hr/>
            <hr/>

            {props.children}

            <hr/>
            <F></F>

        </div>
    )
}


export default Perr