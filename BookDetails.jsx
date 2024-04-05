import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/3`

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const {bookId} = useParams();

  const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`
  console.log(bookId);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const result = await response.json();
      setBookDetails(result.book);
    } catch(err) {
      console.error(err);
    }
  }


  useEffect(()=>{
    fetchBookDetails();
  },[bookId]);

  console.log(bookDetails);

  return (
    <>
      {!bookDetails ? (
        <h2>Loading...</h2>
      ) : (
      <>
      <h2>{bookDetails.title}</h2>
      <ul>
        <li>Author: {bookDetails.author}</li>
        <li>Description: {bookDetails.description}</li>
      </ul>
      </>
      )}
    </>
    
  )

}

export default BookDetails;