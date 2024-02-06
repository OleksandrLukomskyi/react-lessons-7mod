import FormCreateTodo from "components/Forms/FormCreateTodo"
import TodoList from "components/TodoList"
import { useSelector, useDispatch } from "react-redux"
import { addTodoAction, removeTodoAction, updateTodoAction } from "../store/todoWithSlice/sliceTodo"



const TodoPage = () => {

  const {todo} = useSelector(state=>state.todo)
const dispatch = useDispatch()

  const deleteTodo = (id) => {
    dispatch(removeTodoAction(id))
  }
  
  const updateTodo = (id) => {
    dispatch(updateTodoAction(id))
  }
  const createTodo = (data) => { 
    dispatch(addTodoAction(data))
   }

  return  <>
  <FormCreateTodo createTodo={createTodo}/>
  {todo&&<TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />}
  </>
  
}

export default TodoPage
