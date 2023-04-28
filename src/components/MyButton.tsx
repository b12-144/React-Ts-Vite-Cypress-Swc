import { useState } from 'react';


export default function Button(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    return <>
        <button>MyButton</button>
    </>
}





