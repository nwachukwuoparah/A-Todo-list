import './App.css'
import { MdDelete } from "react-icons/md";
const Controles = ({ todo, Del, coun }) => {
    return (
        <div>
            <div className='counter'>
                <p>You have {coun} pending task</p>
                <button>Filter</button>
            </div>
            <div className='cardHolder'>
                {todo?.map(
                    (item) => <div className='card'><p>{item}</p>
                        <div className='delete'>
                 <MdDelete onClick={() => { Del(item) }} /></div></div>
                )}
            </div>
        </div>
    )
}

export default Controles
