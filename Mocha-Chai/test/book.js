/*jslint node: true */
//"use strict";


/* ====
By changing the node env to test, the config file changes to the test db
that we want to use instead of the main DB
==== */
process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let Book = require('../app/models/book');

//Dev dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

/* PARENT BLOCK CONTAINER
============= */
describe('Books', ()=> {

     /* Before each test call the .remove function to clear the test
        database */
     beforeEach((done) =>{
          Book.remove({}, (err) =>{
               done();
          });
     });

     /* Notes on quering the server -->
        1. server variable has been exported from the main server.js (bottom page)
        2. get() -> the path and verb that you want to test
        3. done() allows the async to progress properly
     */

     /* TEST THE GET REQUEST
     ===================== */

     describe('/GET book', ()=>{
          it('should get all books', (done) =>{
               chai.request(server)
                    .get('/book')
                    .end((err,res) => {
                         res.should.have.status(200);
                         res.body.should.be.a('array');
                         res.body.length.should.be.eql(0);
                         done();
                    });
          });
     });

     /* TEST THE POST REQUEST
     ======================== */

     describe('/POST book', ()=> {
          it('should not POST a book without pages field', (done) => {
               let book = {
                    title: 'Test book',
                    author: 'Test author',
                    year: 1987
               };
               chai.request(server)
                   .post('/book')
                   .send(book)
                   .end((err,res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('errors');
                        res.body.errors.should.have.property('pages');
                        res.body.errors.pages.should.have.property('kind').eql('required');
                        done();
                   });
          });
          it('should POST a book', () =>{
               let book = {
                    title: 'Test book',
                    author: 'Test author',
                    year: 1987,
                    pages: 100
               };
               chai.request(server)
                   .post('/book')
                   .send(book)
                   .end((err,res) =>{
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Book successfully added!');
                        res.body.book.should.have.property('title');
                        res.body.should.have.property('_id');
                        res.body.should.not.have.property('errors');
                        done();
                   });
          });
     });//in the post book section

     /* TEST THE GET/:ID REQUEST
     ========================== */

     describe('GET/:id Request route', () =>{
          it('should return the correct requested book', (done) => {

               //Create a new book for insertion
               let bookTest = new Book ({
                    title: 'Test book',
                    author: 'Test author',
                    year: 1987,
                    pages: 100
               });

               /*Save test book above and call route referencing newly created
                 test book */
               bookTest.save((err,bookTest) => {
                    if(err){console.log('Test Error ' + err);}
                    else{

                    /* Carry out the request for the document inside the callback
                       of document save */
                    chai.request(server)
                        .get('/book/' + bookTest.id)
                        .send(bookTest)
                        .end((err,res) => {
                             res.should.have.status(200);
                             res.body.should.have.property('_id').eql(bookTest.id);
                             res.body.should.have.property('title');
                             res.body.should.have.property('author');
                             done();
                        });
                   }
               });

          });
     });

     /* TEST THE PUT/:ID REQUEST
     ========================== */
     describe('/PUT/:id to update book', () => {
          it('should update existing document successfully', () => {

               //Create a new book for insertion
               let bookTest = new Book ({
                    title: 'Test book',
                    author: 'Test author',
                    year: 1987,
                    pages: 100
               });

               bookTest.save((err,bookTest) => {
                    chai.request(server)
                        .put('./book/' + bookTest.id)
                        .send({
                             title: 'Test Book Changed',
                             author: 'Test author',
                             year: 3000
                        })
                        .end((err,res) => {
                             res.should.have.status(200);
                             res.body.should.have.property('_id').eql(bookTest.id);
                             res.body.should.have.property('pages').eql(100);
                             res.body.should.have.property('year').eql(3000);
                             res.body.should.have.property('author').eql('Test author');
                             done();
                        });
               });

          });
     });

     /* TEST THE DELETE/:ID REQUEST
     ========================== */
     describe('delete/:id book', ()=>{
          it('should delete the given ID', (done) => {

               //Create a new book for insertion
               let bookTest = new Book ({
                    title: 'Test book',
                    author: 'Test author',
                    year: 1987,
                    pages: 100
               });

               bookTest.save((err,bookTest) => {
                    chai.request(server)
                         .delete('/book/' + bookTest.id)
                         .end((err,res) => {
                              res.should.have.status(200);
                              res.body.should.be.a('object');
                              res.body.should.have.property('message').eq('Book successfully deleted');
                              res.body.result.should.have.property('ok').eql(1);
                              res.body.result.should.have.property('n').eql(1);
                              done();
                         });
               });
          });
     });



});
