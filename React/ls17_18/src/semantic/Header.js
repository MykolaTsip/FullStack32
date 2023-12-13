import { Link, NavLink } from 'react-router-dom';

import './Header.css'

const styles = {display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100px', backgroundColor: 'silver'}

function Header() {


    return (
        <div style={styles}>
            {/* <div> <a href="/user"> Main </a> </div> */}
            <div> <Link className='link' to='/'> Main </Link> </div>
            <div> <NavLink className={({isActive, isPending}) => isPending ? 'fgdfdfh' : isActive ? 'act link' : 'link'} to='/user'> Users </NavLink> </div>
            <div> Posts </div>
            <div> Coometns </div>
        </div>
    )
    
}

export default Header;