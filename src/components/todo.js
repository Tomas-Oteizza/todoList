import {useState} from 'react';

function Todo({item, onUpdate, onDelete}) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title)
        
        function handleSubmit(event){
            event.prevenDefault();

        }

        function handleChange(event) {
            const value = event.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo (){
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }

        return (
            <form className='todoUpdateFormn' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue}/>
                <button className='button' onClick={handleClickUpdateTodo}>update</button>
            </form>
        )
    }

    function TodoElement(){
        return(
            <div className='todoInfo'> 
                <span className='todoTitle'>{item.title}</span>
                <button className='button' onClick={() => setIsEdit(true)}>edit</button>
                <button className='buttonDelete'onClick={(event) => onDelete(item.id)}>delete</button>
            </div>
        )
    }

    return (

        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>

        
    )
}

export default Todo