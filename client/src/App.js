// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// import {ApolloClient} from 'apollo-boost'
// import {ApolloProvider,ApolloClient,InMemoryCache,HttpLink} from '@apollo/client'
// import {InMemoryCache} from '@apollo/client'

// import { ApolloProvider } from 'react-apollo';
//react-apollo is the thing that is binding react front-end with apollo and helping front-end understand what apollo is doing
//to inject whatever data we are getting from the server we must wrap the entire application with apollo provider 


//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// import { HttpLink } from 'apollo-boost';


//apollo client setup
// const client= new ApolloClient({
//   // uri:'http://localhost:4000/graphql',
//   link:new HttpLink({
//     uri:'http://localhost:4000/graphql',
//   }),
//   cache:new InMemoryCache(),
  
// })

function App() {
  return (

          <div 
          id="main"
          >
            <h1>Ninjas Reading List</h1>
            <BookList/>
            <AddBook/>

          </div>
  );
}

export default App;
