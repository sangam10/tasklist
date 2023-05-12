import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask } from '../features/Tasks'

function Create() {
    const tasks = useSelector((state) => state.tasks.value)
    const [form, setForm] = useState({
        task: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { value } = event.target
        setForm({...form,task:value})
    }
    const createTask = (event) => {
        event.preventDefault();
        console.log(form)

        //submit
        dispatch(
            addTask({ id: tasks[tasks.length - 1].id + 1, task: form.task, date: new Date() })
        )
        //reset form
        setForm({
            task: ''
        })
        navigate('/')
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
                        <form onSubmit={createTask}>
                            <div class="mb-3">
                                <label for="task" className="form-label">Task</label>
                                <textarea
                                    onChange={handleChange}
                                    value={form.task}
                                    type="text"
                                    rows={5}
                                    name="task"
                                    className="form-control"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Create;