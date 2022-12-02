import './App.css'
import { MdDelete } from "react-icons/md";

const Controles = ({ todo, coun, Del }) => {
    return (
        <div className='maincardHolder'>
            <div className='counter'>
                <p>You have {coun} pending task</p>
                <button>Filter</button>
            </div>
            <div className='cardHolder'>

                {todo.length === 0 ? <p className='inital'>Add a to-do</p> : todo?.map(
                    (item) => <div className='card'><p>{item.task}</p>
                        <div className='delete'>
                            {console.log(item)}      <MdDelete onClick={() => { Del(item) }} /></div></div>
                )}
            </div>
        </div>
    )
}

export default Controles