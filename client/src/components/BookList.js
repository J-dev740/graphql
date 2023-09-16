import { useQuery, gql } from '@apollo/client';
import React ,{Component,useState,useEffect} from "react";

const getBooksQuery=gql`
{    
    books{
        name
        genre
        
    }
}
`
function BookList(){

 function displayBook(){
    const {loading,error,data}= useQuery(getBooksQuery)

    // useEffect(() => {    
    // }, [data])
    
    // console.log('status...')
    // console.log({data})
    // console.log({error})
    console.log(loading)
if(loading){
    // console.log(data)
    return (
        <div>
            <h1>Loading....</h1>
            <div></div>
        </div>
    )
}
else{
    console.log(data.books)

  return  data.books.map(({name,genre},index)=>

(            <li key={index}>
                {name}----{genre}
                </li>)
    )
}
}

    return (
    
    <div>
          <h3>
            BookName
            </h3>  
       <ul id="book-list">
        <li className='text-black font-bold'>{displayBook()}</li>
       </ul>

      </div>
    );

  }
  
  export default BookList
//   export default graphql(getBooksQuery)(BookList)
 //we are acutally binding getBooksQuery with BookList compoent using the graphql method of react-apollo
  