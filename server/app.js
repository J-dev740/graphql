const express=require('express')
const app=  express()
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')
//create an endpoint to handle queries or let express understand queries with graphql query language
//this graphql middleware must contain some schema to represent data at this particular endpoint
//this schema rep diff type of datastructures and relation between these types so it can be traversed 
app.use('/graphql',graphqlHTTP({
    // schema:schema
    schema,
    graphiql:true
}))


app.listen(4000,()=>{
    console.log('now listening to req on port 4000....')
})