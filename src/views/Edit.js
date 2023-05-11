import { useSelector,useParams } from "react-redux";
import { Link } from "react-router-dom";

function Edit() {
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
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Task</label>
                            <textarea type="text" rows={5} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Edit;