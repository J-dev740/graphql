import { gql } from "@apollo/client";

const getBooksQuery=gql`
{    
    books{
        name
        genre
        id
        
    }
}
`
const getAuthorsQuery=gql`
{    
    authors{
        name
        id
        
    }
}
`
const addBookMutation=gql`

    mutation addBook($name:String!,$genre:String!,$authId:ID!){
        addBook(name:$name,genre:$genre,authId:$authId){
            name
            id
        }
    }
`
const getBookQuery=gql`
query getBooks($id:ID!){
    book(id:$id){
        name
        genre
        author{
            name
            age
            book{
                name
                genre
                id
            }
        }
    }
}
`

export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookQuery}
