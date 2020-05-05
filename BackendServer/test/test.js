const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


//USER API
describe('USER API', () => {

    //GET USERS
    it('list all users', (done) => {
        chai.request(server)
            .get('/user/show')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                for (let i = 0; i < response.body.length; i++) {
                    response.body[i].should.be.a('object');
                    response.body[i].should.have.a.property('_id');
                    response.body[i].should.have.a.property('name');
                    response.body[i].should.have.a.property('email');
                    response.body[i].should.have.a.property('address');
                }
                done();
            });
    });


    //POST USER
    it('post a user', (done) => {
        testcase = {
            name: "hari",
            email: "pola@gmail.com",
            address: {
                street: "some street",
                city: "hyderabad"
            }
        }
        chai.request(server)
            .post('/user/add')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Data Inserted');
                done();
            });
    });


    //UPDATE USER
    it('update a user', (done) => {
        testcase = {
            name: "hari",
            email: "pola@gmail.com",
            address: {
                street: "some street",
                city: "hyderabad"
            }
        }
        chai.request(server)
            .post('/user/update/hari')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Data Updated');
                done();
            });
    });

    //DELETE USER
    it('delete a user', (done) => {
        chai.request(server)
            .post('/user/delete/hari')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Data Deleted');
                done();
            });
    });

    //UPDATE USER USER NOT FOUND
    it('user not found to update', (done) => {
        testcase = {
            name: "hari",
            email: "pola@gmail.com",
            address: {
                street: "some street",
                city: "hyderabad"
            }
        }
        chai.request(server)
            .post('/user/update/hari')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('User not found');
                done();
            });
    });

    //DELETE USER USER NOT FOUND
    it('user not found to delete', (done) => {
        chai.request(server)
            .post('/user/delete/hari')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('User not found');
                done();
            });
    });
});



//POSTS API
describe('POST API', () => {

    //GET ALL POSTS
    it('list all posts', (done) => {
        chai.request(server)
            .get('/user/showposts/babu')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                for (let i = 0; i < response.body.length; i++) {
                    response.body[i].should.be.a('object');
                    response.body[i].should.have.a.property('postTitle');
                    response.body[i].should.have.a.property('postName');
                }
                done();
            });
    });

    //POST A POST
    it('post a post', (done) => {
        testcase = {
            postTitle: "title",
            postData: "Data"
        }
        chai.request(server)
            .post('/posts/addposts/babu')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Data Updated');
                done();
            });
    });


    //POST A POST USER NOT FOUND
    it('user not found to post', (done) => {
        testcase = {
            postTitle: "title",
            postData: "Data"
        }
        chai.request(server)
            .post('/posts/addposts/balu')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('User not found');
                done();
            });
    });


    //POST A POST POST ALREADY EXISTS
    it('user already exists', (done) => {
        testcase = {
            postTitle: "title",
            postData: "Data"
        }
        chai.request(server)
            .post('/posts/addposts/babu')
            .send(testcase)
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Post already exists');
                done();
            });
    });


    //DELETE POST
    it('delete a post', (done) => {
        chai.request(server)
            .post('/posts/deleteposts/babu/title')
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Data deleted');
                done();
            });
    });

    //DELETE POST USER NOT FOUND
    it('user not found to delete', (done) => {
        chai.request(server)
            .post('/posts/deleteposts/balu/title')
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('User not found');
                done();
            });
    });

    //DELETE POST POST NOT FOUND
    it('posts not found to delete', (done) => {
        chai.request(server)
            .post('/posts/deleteposts/babu/title')
            .end((err, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('Post not found');
                done();
            });
    });
})