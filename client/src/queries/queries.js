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

export {getAuthorsQuery,getBooksQuery,addBookMutation}
