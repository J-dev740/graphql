import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
// import reportWebVitals from './reportWebVitals';
const Client = new ApolloClient({
  // uri: 'https://flyby-router-demo.herokuapp.com/',
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
//code to  test the working of the client
// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
// Client
//   .query({
//     query: gql`
// {     
//    book(id:"6506f11a24e64fca65407350"){

//           name
//           genre
//           author{
//             name 
//             age
//           }

//       }
// }
  
//     `,
//   })
  // .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ApolloProvider client={Client}>

    <App />

  </ApolloProvider>

  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
