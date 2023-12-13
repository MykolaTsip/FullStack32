import './Footer.css';

function Footer(props) {
    
    console.log(props);

    return (<div className={props.className}>
        {props.children}
    </div>)
}

export default Footer;