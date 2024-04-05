import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchAllBooks = async () => {
    try{
      const response = await fetch(API_URL);
      const result = await response.json();
      setBooks(result.books);
    } catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    fetchAllBooks()
  },[]);

  console.log(books);

  return (
    <>
      <h1>All Books!</h1>
      {books.map((book)=>{
      return (
        <>
          <div key={book.title} className="card btn btn-warning" onClick={()=>{
            console.log(book.id);
            navigate(`/books/${book.id}`)
          }}>
            <div className="card-body">{book.title}</div>
          </div>
        </>
      )
    })}
    </>
  )
}

export default Books