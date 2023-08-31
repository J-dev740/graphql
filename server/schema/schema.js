//in this file is where we are going to define the schema
const graphql=require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList } = graphql;
const _= require('lodash')
//importing mongodb Models into this file
const Book=require('../models/book')
const Author=require('../models/author')
//dummy data
// var books=[
//     {name:'Name of the Wind ',genre:'Fantasy',id:'1'},
//     {name:'The Final Empire',genre:'Fantasy',id:'2'},
//     {name:'The Long Earth',genre:'Sci-Fi',id:'3'},
// ]
// var books=[
//     {name:'Name of the Wind ',genre:'Fantasy',id:'1',authId:'1'},//written by patrick Rothfuss
//     {name:'The Final Empire',genre:'Fantasy',id:'2',authId:'2'},//written by Brandon sanderson
//     {name:'The Long Earth',genre:'Sci-Fi',id:'3',authId:'3'},//written by Terry Pratchett
//     {name:"The Heros of Long ages",genre:'Fantasy',id:'4',authId:'2'},
//     {name:"The Colour of Magic",genre:'Fantasy',id:'4',authId:'3'},
//     {name:"The Light Fantastic",genre:'Fantasy',id:'4',authId:'3'},

// ]
// var authors=[
//     {name:"Patrick Rothfuss",age:44 ,id:"1"},
//     {name:"Brandon Sanderson",age:42 ,id:"2"},
//     {name:"Terry Pratchett",age:66 ,id:"3"},

// ]

 //now define a new type
 const BookType=new GraphQLObjectType({
    name:'Book',
    //we have wrapped all of these fields inside an es6 functiono
    fields:()=>({
        // id:{type:GraphQLString},
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                console.log(parent)//here parent returns the book that we requested which contains the authId related to the author
                // return _.find(authors,{id:parent.authId})
            }
        }
    })
 })
 const AuthorType=new GraphQLObjectType({
    name:'Author',
    //we have wrapped all of these fields inside an es6 function
    //the fields are wrapped inside the function since it is only run when called after compiling everything
    //other wise execution errors out
    fields:()=>({
        // id:{type:GraphQLString},
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        book:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                // return _.filter(books,{authId:parent.id})//parent is the initial author that we requested 
            }
        }
    })
 })

 const Mutation= new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addAuthor:{ //in this case mutaion in sense addition is used to add Author to the database when this addAuthor schem in graphql is called 
            type:AuthorType,
            args:{
                name:{type:GraphQLString},
                age:{type:GraphQLInt}

            },
            resolve(parent,args){
                let author= new Author({
                    name:args.name,
                    age:args.age
                })
                //to get output in graphiql we must return the result of the author.save() function
               return author.save()
            }
        },
        addBook:{
            type:BookType,
            args:{
                name:{type:GraphQLString},
                genre:{type:GraphQLString},
                authId:{type:GraphQLID}
            },
            resolve(parent,args){
                let book=new Book({
                    name:args.name,
                    genre:args.genre,
                    authId:args.authId
                })

                return book.save()

            }
        }
    }
 })
//rootquery defines  how we initially jump into the graph
 const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        //schema for the book query
        book:{
            type:BookType, // the type of data we are looking for is of booktype
            args:{id:{type:GraphQLID}},//sepcifies what should be provided as a query argument along with book rootquery type to get some particlar books 
            resolve(parent,args){ //resolve function is to resolve a query by querying the db
                //code to get dummy data for testing using lodash
            //   return  _.find(books,{id:args.id})
             //code to get data from db/other resources 
                //this parent argument will come into play when we start defining relationships between types
                //we have access to the arguments eg:id passed along with query through the args parameter in this function
            }


        },
        //schema for the author query
        author:{
            type:AuthorType, 
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // return _.find(authors,{id:args.id})
            }

        },
        
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                // return books
            }
        },
        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                // return authors
            }
        }


    }
 })


 module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
 })