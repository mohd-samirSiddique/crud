import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Form() {


    // starting of api handling 
    // Edit
    const [editName, SetEditName] = useState('hiis')
    const [editSurname, setEditSurname] = useState('ggg')
    const [editMno, setEditMno] = useState('')
    const [editEmail, setEditEmail] = useState('')
    const [editPasswoard, setEditPasswoard] = useState('')
    const [editComment, setEditComment] = useState('')

    // const [error, setError] = useState(false)
    // let navigate = useNavigate()


    console.log(editName, editSurname, editMno, editEmail, editPasswoard, editComment)

    let handleOnSubmit = function (e) {
        e.preventDefault()
    }

    const params = useParams()
    let id = params.id
    useEffect(() => {
        handleSubmitFill(id)
    },[])

    let handleSubmitFill = async function (id) {
        console.log(id)
        let result = await fetch(`http://localhost:7000/updateForm/${id}`)
        let data = await result.json()
        console.log(data);

        SetEditName(data.data.name)
        setEditSurname(data.data.surname)
        setEditEmail(data.data.email)
        setEditMno(data.data.mno)
        setEditComment(data.data.comment)

        // console.log(data.name);
    }

    let handleSubmit = async function (id) {
        console.log(id)
    }



    // Ending of api handling    
    return (
        <>
            <form action="" onSubmit={handleOnSubmit}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => SetEditName(e.target.value)} value={editName} />
                            {/* {error  !name && <span>Please enter your name before submit</span>} */}

                        </div>
                        <div className="col-lg">
                            <label htmlFor="">surname</label>
                            <input type="text" name="" id="" placeholder="Enter your surname" className="form-control" onChange={(e) => setEditSurname(e.target.value)} value={editSurname} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg">
                            <label htmlFor="">Mobile No</label>
                            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => setEditMno(e.target.value)} value={editMno} />
                        </div>
                        <div className="col-lg">
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" placeholder="Enter your surname" className="form-control" onChange={(e) => setEditEmail(e.target.value)} value={editEmail} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg">
                            <label htmlFor="">Passwoard</label>
                            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => setEditPasswoard(e.target.value)} value={editPasswoard} />
                        </div>
                        <div className="col-lg">
                            <label htmlFor="">Comment</label>
                            <textarea name="" id="" placeholder="Enter your comment" className="form-control" onChange={(e) => setEditComment(e.target.value)} value={editComment}></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success" onClick={handleSubmit()}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}



