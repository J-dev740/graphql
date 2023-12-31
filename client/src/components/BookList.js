import { useQuery, gql } from '@apollo/client';
import React ,{Component,useState,useEffect} from "react";
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


function BookList(){
    const[selected,setSelected]=useState('')

 function displayBook(){
    const {loading,error,data}= useQuery(getBooksQuery)

    // useEffect(() => {    
    // }, [data])
    
    // console.log('status...')
    // console.log({data})
    // console.log({error})
    // console.log(loading)
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
    // console.log(data.books)

  return  data.books.map(({name,genre,id},index)=>

(            <li key={id} value={id} onClick={(e)=>{setSelected(id)}}>
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
        {/* <li className='text-black font-bold'></li>
         */}
         {displayBook()}
       </ul>
       <BookDetails bookId={selected}/>

      </div>
    );

  }
  
  export default BookList
//   export default graphql(getBooksQuery)(BookList)
 //we are acutally binding getBooksQuery with BookList compoent using the graphql method of react-apollo
  