import { useState } from 'react';
import './StatusToggleBtns.css'; 

const Btn = ({selectedBtn, btnText}) => {
    const btnClassName =  selectedBtn === btnText ? 'selectedBtn' : 'unselectedBtn';
    return (<button className={btnClassName}>{btnText}</button>);
    
};
const StatusToggleBtns = () => {
    const [selectedBtn, setSelectedBtn] = useState('All');
    const handleClick = (event) => setSelectedBtn('abc');
    return (
    <div>
        <Btn btnText='All' onClick={handleClick} selectedBtn={selectedBtn}/>
        <Btn btnText='Active' onClick={handleClick} selectedBtn={selectedBtn} />
        <Btn btnText='Unfinished' onClick={handleClick} selectedBtn={selectedBtn} />

    </div>
    )
  };
  
  export default StatusToggleBtns;