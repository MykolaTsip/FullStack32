import { useNavigate } from 'react-router-dom'

function Err() {

    let linkTo = useNavigate();

    const comeToMain = () => {
        
        let num = Math.round(Math.random()*100)
        console.log(num);

        if (num > 50) linkTo('/');
    }

    return (
        <div>
            YOU TRY VISIT UNEXIST PAGE. PLEASE COME BACK TO EXIST PAGE.
            <hr/>
            
            <button onClick={comeToMain}> Come back  to MAIN </button>

            <hr/>
        </div>
    )
}

export default Err;