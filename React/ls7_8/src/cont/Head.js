import React from 'react';



class Header extends React.Component {

    myProp;

    constructor(props) {
        super();
        console.log(props);
        this.myProp = props
    }


    // return <div>
    render() {


        return (
        <div>
            <h3>
                {this.myProp.str}
            </h3>
            Heelooo
            <hr/>
            {this.myProp.children}
        </div>)
    }
}


export default Header