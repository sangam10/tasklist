import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateTask } from "../features/Tasks";

function Edit() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const tasks = useSelector((state) => state.tasks.value)
    let task = tasks.find((t) => t.id == id)
    const [form, setForm] = useState({ ...task })


    const handleChange = (event) => {
        const { value } = event.target
        setForm({ ...form, task: value })
    }
    const updateTaskSubmit = (event) => {
        event.preventDefault();

        //submit
        dispatch(
            updateTask({ id: form.id, task: form.task, date: new Date() })
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
                        <h4>Update Task</h4>
                        <Link to={'/'} className="btn btn-primary">All Task</Link >
                    </div>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form onSubmit={updateTaskSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Task</label>
                                <textarea type="text" rows={5} className="form-control" onChange={handleChange} value={form.task} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Edit;