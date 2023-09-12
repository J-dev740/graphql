import { useQuery, gql,useMutation } from '@apollo/client';
import React ,{Component,useState,useEffect} from "react";
import { getAuthorsQuery,addBookMutation,getBooksQuery,getBookQuery} from '../queries/queries';


function BookDetails({bookId}){



    // console.log('id')
    // console.log(bookId)
    // console.log(typeof(bookId))
    // const[bookDetails,setBookDetails]=useState('')

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
    function displayBookDetails(){
        const{loading,error,data:bookData}=useQuery(getBookQuery,
            {
            variables:{
                id:bookId
            }
        }
        )
        if (loading) return 'Loading...';
        if (error){
            console.log(error.message)
             return `No book selected `
            }
        console.log('book data')
        console.log(bookData.book.name)
        if(bookData){
            return(
                <div>
                    <h2>{bookData.book.name} </h2>
                    <p>{bookData.book.genre}</p>
                    <p>Author:{bookData.book.author.name}</p>
                    <p>All books by this Author</p>
                    <ul >
                        {
                            bookData.book.author.book.map((item)=>{
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }else{
            return(
                <div>No book selected...</div>
            )
        }
        
    }

   
       return (
       
       <div id='book-details'>
        {displayBookDetails()}

         </div>
       );
   
     }

     export default BookDetails