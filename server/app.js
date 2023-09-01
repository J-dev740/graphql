const express=require('express')
require('dotenv').config()
const app=  express()
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')
const connectDB=require('./db/connect')
app.use(express.json())
//create an endpoint to handle queries or let express understand queries with graphql query language
//this graphql middleware must contain some schema to represent data at this particular endpoint
//this schema rep diff type of datastructures and relation between these types so it can be traversed 

app.use('/graphql',graphqlHTTP({
    // schema:schema
    schema,
    graphiql:true
}))



const url="mongodb+srv://jithu:Pa55word32@cluster0.s4bg7bs.mongodb.net/graphQL?retryWrites=true&w=majority"

const start=async()=>{
    try {
        await connectDB(url)
        console.log('connected...')
        app.listen(4000,()=>{
            console.log('now listening to req on port 4000....')
        })
    } catch (error) {
        console.log(error)
    }
}

start()