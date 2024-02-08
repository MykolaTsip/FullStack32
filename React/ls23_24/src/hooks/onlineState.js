import { useState,  } from 'react';


export function useOnline() {
    const [useEffectisOn, setOn] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setOn(!isOn);

        }, 1000)
    }, [isOn])


    return isOn;
}
