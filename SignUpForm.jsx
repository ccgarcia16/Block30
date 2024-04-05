import { useState } from "react"

const SignUpForm = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [token,setToken] = useState("");

  const API_URL = " https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register"

  const mySubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password
        })
      });
      const result = await response.json();
      console.log(result);
    } catch(err){
      console.error(err)
    }
  }

  

  return (
    <>
      <h2>Sign Up Here</h2>
      <form onSubmit={mySubmit}>
        <label>
          First Name: <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <br></br>
        <label>
          Last Name: <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <br></br>
        <label>
          Email: <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br></br>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm