import { useQuery, gql,useMutation } from '@apollo/client';
import React ,{Component,useState,useEffect} from "react";
import { getAuthorsQuery,addBookMutation,getBooksQuery,getBookQuery} from '../queries/queries';


function BookDetails({bookId}){
    console.log('id')
    console.log(bookId)
    console.log(typeof(bookId))
    // const[bookDetails,setBookDetails]=useState('')
    const{loading,error,data:bookData}=useQuery(getBookQuery,
        {
        variables:{
            id:bookId
        }
        }
    )
    // if(loading){
    //     console.log('loading')
    //     console.log(loading)
    //     return null
    // }else{
    //     console.log('book details')
    //     console.log(loading)
    //     console.log(error)
    //     console.log(data)
        
    // }
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(bookData)
   
       return (
       
       <div id='book-details'>
        <p>Output book details here </p>

         </div>
       );
   
     }

     export default BookDetails