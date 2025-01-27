import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function FormTable() {



    // starting of api 
    let [data, setData] = useState([])


    useEffect(() => {
        handleData()
    }, [])

    let handleData = async function () {
        let result = await fetch(`http://localhost:7000/formData`)
        result = await result.json()
        setData(result)
        console.log(result)
    }

    let handelDelete = async function (id) {
        console.log(id)
        let result = await fetch(`http://localhost:7000/formDelete/${id}`, {
            method: "delete",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        console.log(result)

        handleData()
    }
    // Ending of api

    let sr = 1

    return (
        <>
            <div className="container-fluid">
                <div className="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">sr no.</th>
                                <th scope="col">name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Comment</th>
                                <th scope="col">Operation

                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{sr++}</td>
                                            <td>{item.name}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.mno}</td>
                                            <td>{item.email}</td>
                                            <td>{item.comment}</td>
                                            <td>
                                                <NavLink to={`/formUpdate/${item._id}`}><button className="btn btn-success">Update</button></NavLink>
                                                <button className="btn btn-danger ms-2" onClick={() => handelDelete(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                            {/* <tr>
                                <td>1</td>
                                <td>samir</td>
                                <td>siddique</td>
                                <td>6397992899</td>
                                <td>samirsiddique98581@gmail.com</td>
                                <td>Nice to meet you.</td>
                                <td>
                                    <button className="btn btn-success">Update</button>
                                    <button className="btn btn-danger ms-2">Delete</button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}