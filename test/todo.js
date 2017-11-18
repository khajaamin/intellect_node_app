//During the test the env variable is set to test
process.env.NODE_ENV = 'test';



//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();
global.should = chai.should();
global.expect = chai.expect;
chai.use(chaiHttp);

//Our parent block
describe('Todo', () => {
    beforeEach((done) => { //Before each test we empty the database
		console.log("Before eatch here. "); 
		 done();    
    });
/*
  * Test the /GET route
  */
  describe('/GET todo with id', () => {
      it('it should GET todo with id', (done) => {
        chai.request(server)
            .get('/api/todos/2')
            .end((err, res) => {
				expect(res).have.status(200);
				expect(res.body).be.a('object');
               
              done();
            });
      });
  });

  
  
    describe('/GET hot todos with User ID', () => {
      it('it should GET todos which are hot to do for user id', (done) => {
        chai.request(server)
            .get('/api/todos/hot/2')
            .end((err, res) => {
		
				expect(res).have.status(200);
				expect(res.body).be.a('object');
				expect(res.body).have.property('user_id');
				expect(res.body).have.property('hot_items');
              done();
            });
      });
  });

  
  
});