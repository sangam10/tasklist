import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from '../features/Tasks'

function Create() {
    const tasks = useSelector((state) => state.tasks.value)
    const [task, setTask] = useState({
        task: ''
    })
    const dispatch = useDispatch()

    const handleChange = (event)=>{
        console.log(event.target)
    }
    return (<>
        <div className="container pt-5">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h4>Create Task</h4>
                        <Link to={'/'} className="btn btn-primary">All Task</Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Task</label>
                            <input
                                onChange= {handleChange}
                                value={task.task}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={
                                () => {
                                    dispatch(
                                        addTask({ id: tasks[tasks.length - 1].id + 1, task: task, date: new Date() })
                                    )
                                }}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Create;