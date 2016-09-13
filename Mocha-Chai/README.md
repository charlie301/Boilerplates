# Template/example code for running HTTP unit tests
---

Links to mods used:

 * https://github.com/chaijs/chai-http
 * https://mochajs.org/


Notes:

### Routes |  app --> routes --> book.js
-----

* By requiring this module, you can put all reqs as seperated function calls.



### Tests |  test --> book.js

----

#### Test help commands
```
* get
res.should.have.status(200); 		
res.body.should.be.a('array');
res.body.length.should.be.eql(0);	= return empty json array

* put (fail)
res.body.should.have.property('errors');	=
es.body.errors.pages.should.have.property('kind').eql('required');	= 'required' in the mongoose schema (l16)

* post
res.body.should.have.property('message').eql('Book successfully added!');	= JSON msg returned in routes l32

* update
res.body.should.have.property('_id').eql(bookTest.id);

* delete
res.body.result.should.have.property('ok').eql(1);	<- included in Mongo result object upon deletion
res.body.result.should.have.property('n').eql(1);   <- inlcude in Mongo result object upon deletion

```
