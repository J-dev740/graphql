import { useQuery, gql,useMutation } from '@apollo/client';
import React ,{Component,useState,useEffect} from "react";
import { getAuthorsQuery,addBookMutation,getBooksQuery } from '../queries/queries';


function AddBook(){
    const[Data,setData]=useState({
        name:'',
        genre:'',
        authId:''
    })
    const [addBook,{loading,error,data:bookData}]=useMutation(addBookMutation)
function handleSubmit(e){
    e.preventDefault()
    console.log(Data)
    // console.log(`updated Data:${{data:Data}}`)
    //call the mutation function returned by useMutation react hook to mutate or add data to the graphql server
    addBook({variables:{name:Data.name,genre:Data.genre,authId:Data.authId},
        refetchQueries:[getBooksQuery]
    })
    console.log(bookData)
}
function displayAuthors(){

    const {loading,error,data}=useQuery(getAuthorsQuery)

    if(loading){
        return(
            <option disabled>Loading Authors...</option>
        )
    }
    else {
        return data.authors.map((author)=>{
            return(
                <option key={author.id} value={author.id}>{author.name}</option>
            )
        })
    }
}

   
       return (
       
       <div>
        <form id='add-book' onSubmit={handleSubmit}>
        <div >
        <div className='field'>
                <label>
                    BookName:
                </label>
                <input type='text'
                value={Data.name}
                 onChange={(e)=>{setData({...Data,name:e.target.value})}}
                 />
            </div>
            <div className='field'>
            <label>
                    Genre:
                </label>
                <input type='text'
                                value={Data.genre}
                                onChange={(e)=>{setData({...Data,genre:e.target.value})}}
                />
            </div>
            <div className='field'>
            <label>
                    Author:
                </label>
                <select onChange={(e)=>{setData({...Data,authId:e.target.value})}}>
                    <option>
                        SelectAuthor
                    </option>
                    {displayAuthors()}
                </select>
            </div>
            <button type='submit'>+</button>
        </div>
        </form>

         </div>
       );
   
     }

     export default AddBook