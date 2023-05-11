import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/Tasks";
function Index() {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks.value)
    return (<>
        <div className='container pt-5'>
            <div className='card'>
                <div className='card-header'>
                    <div className='d-flex justify-content-between'>
                        <h4>Task List</h4>
                        <Link to='/create' className='btn btn-primary'>New Task</Link>
                    </div>
                </div>
                <div className='card-body'>
                    {
                        tasks.map((task) => {
                            return (<div className='card px-2 py-3 mb-2' key={task.id}>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <p className="mb-0">
                                            {task.task}
                                        </p>
                                        <small className="pt-2 text-muted fst-italic">{task.date.toLocaleString()}</small>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Link to={`/edit/${task.id}`} className='btn btn-success py-1 px-3 me-1'>Edit</Link>
                                        <button className='btn btn-danger py-1 px-3' onClick={() => dispatch(deleteTask({ id: task.id }))}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}

export default Index;