// Import Mocha
let mocha = require('mocha');
// Import Chai
let chai = require('chai');
let chaiHttp = require('chai-http');
const { expect } = require('chai');

let app = require('./index').app;

chai.use(chaiHttp);
chai.should();

describe("Contacts", () => {
    var id;
    describe("POST /", () => {
        it("should post Alice's contact to database", (done) => {
            chai.request(app)
                .post('/api/contacts')
                .send({
                    name: "Alice",
                    email: "alice@gmail.com",
                    phone: "91234567",
                    gender: "Female"
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    res.body.data.should.be.a('object');
                    id = res.body.data._id;
                    done();
                });
        });
    });

    describe("PUT /", () => {
        it("should update Alice's email", done => {
            chai.request(app)
                .put('/api/contacts/' + id)
                .send({
                    email: "alice.tan@gmail.com"
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    res.body.data.should.be.a('object');
                    done();
                });
        })
    })

    describe("GET /", () => {
        it("should get all contacts records", (done) => {
             chai.request(app)
                 .get('/api/contacts')
                 .end((err, res) => {
                     expect(err).to.be.null;
                     res.should.have.status(200);
                     res.body.data.should.be.a('array');
                     done();
                  });
         });
    });

    describe("DELETE /", () => {
        it("should delete Alice's contact record", done => {
            chai.request(app)
                .delete('/api/contacts/' + id)
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    done();
                })
        })
    })
});
