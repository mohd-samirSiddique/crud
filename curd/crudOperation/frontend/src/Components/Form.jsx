import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Form() {

    // starting of api handling 

    const [name, SetName] = useState('')
    const [surname, setSurname] = useState('')
    const [mno, setMno] = useState('')
    const [email, setEmail] = useState('')
    const [Passwoard, setPasswoard] = useState('')
    const [comment, setComment] = useState('')
    // const [error, setError] = useState(false)
    let navigate = useNavigate()

    console.log(name, surname, mno, email, Passwoard, comment)

    let handleOnSubmit = function (e) {
        e.preventDefault()
    }

    let handleSubmit = async function () {
        console.log(name, surname, mno, email, Passwoard, comment)

        if (name && surname && mno && email && Passwoard && comment) {
            // setError(true)
        } else {
            return false
        }


        let result = await fetch(`http://localhost:7000/formdata`, {
            method: "post",
            body: JSON.stringify({
                name, surname, mno, email, Passwoard, comment
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        console.log(result)

        if(result){
            navigate('/table')
        }

    }
  

    // Ending of api handling    
    return (
        <>
            <form action="" onSubmit={handleOnSubmit}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => SetName(e.target.value)} value={name} />
                            {/* {error  !name && <span>Please enter your name before submit</span>} */}

                        </div>
                        <div className="col-lg">
                            <label htmlFor="">surname</label>
                            <input type="text" name="" id="" placeholder="Enter your surname" className="form-control" onChange={(e) => setSurname(e.target.value)} value={surname} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg">
                            <label htmlFor="">Mobile No</label>
                            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => setMno(e.target.value)} value={mno} />
                        </div>
                        <div className="col-lg">
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" placeholder="Enter your surname" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg">
                            <label htmlFor="">Passwoard</label>
                            <input type="text" placeholder="Enter your name" className="form-control" onChange={(e) => setPasswoard(e.target.value)} value={Passwoard} />
                        </div>
                        <div className="col-lg">
                            <label htmlFor="">Comment</label>
                            <textarea name="" id="" placeholder="Enter your comment" className="form-control" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}



// import { useState } from "react";

// export default function Form() {
//     // Form fields and error states
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [mno, setMno] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [comment, setComment] = useState('');
    
//     const [errors, setErrors] = useState({
//         name: '',
//         surname: '',
//         mno: '',
//         email: '',
//         password: '',
//         comment: ''
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent the default form submit behavior

//         // Reset errors before validation
//         setErrors({
//             name: '',
//             surname: '',
//             mno: '',
//             email: '',
//             password: '',
//             comment: ''
//         });

//         // Flag to check if form is valid
//         let formValid = true;
//         const newErrors = {};

//         // Validate fields
//         if (!name) {
//             newErrors.name = "Please enter your name.";
//             formValid = false;
//         }

//         if (!surname) {
//             newErrors.surname = "Please enter your surname.";
//             formValid = false;
//         }

//         if (!mno) {
//             newErrors.mno = "Please enter your mobile number.";
//             formValid = false;
//         }

//         if (!email) {
//             newErrors.email = "Please enter your email.";
//             formValid = false;
//         }

//         if (!password) {
//             newErrors.password = "Please enter your password.";
//             formValid = false;
//         }

//         if (!comment) {
//             newErrors.comment = "Please enter your comment.";
//             formValid = false;
//         }

//         // If the form is valid, submit it
//         if (formValid) {
//             let result = await fetch(`http://localhost:7000/formdata`, {
//                 method: "POST",
//                 body: JSON.stringify({ name, surname, mno, email, password, comment }),
//                 headers: { "Content-Type": "application/json" }
//             });
//             result = await result.json();
//             console.log(result);
//         } else {
//             setErrors(newErrors); // Set error messages for invalid fields
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-lg">
//                             <label>Name</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="form-control"
//                                 onChange={(e) => setName(e.target.value)}
//                                 value={name}
//                             />
//                             {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
//                         </div>
//                         <div className="col-lg">
//                             <label>Surname</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your surname"
//                                 className="form-control"
//                                 onChange={(e) => setSurname(e.target.value)}
//                                 value={surname}
//                             />
//                             {errors.surname && <span style={{ color: "red" }}>{errors.surname}</span>}
//                         </div>
//                     </div>

//                     <div className="row mt-3">
//                         <div className="col-lg">
//                             <label>Mobile No</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your mobile number"
//                                 className="form-control"
//                                 onChange={(e) => setMno(e.target.value)}
//                                 value={mno}
//                             />
//                             {errors.mno && <span style={{ color: "red" }}>{errors.mno}</span>}
//                         </div>
//                         <div className="col-lg">
//                             <label>Email</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your email"
//                                 className="form-control"
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 value={email}
//                             />
//                             {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
//                         </div>
//                     </div>

//                     <div className="row mt-3">
//                         <div className="col-lg">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter your password"
//                                 className="form-control"
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 value={password}
//                             />
//                             {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
//                         </div>
//                         <div className="col-lg">
//                             <label>Comment</label>
//                             <textarea
//                                 placeholder="Enter your comment"
//                                 className="form-control"
//                                 onChange={(e) => setComment(e.target.value)}
//                                 value={comment}
//                             ></textarea>
//                             {errors.comment && <span style={{ color: "red" }}>{errors.comment}</span>}
//                         </div>
//                     </div>

//                     <div>
//                         <button type="submit" className="btn btn-success">
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }