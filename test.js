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
    describe("POST /", () => {
        it("should post one contact to database", (done) => {
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
                    done();
                });
        });

        it("should post one more contact to database", (done) => {
            chai.request(app)
                .post('/api/contacts')
                .send({
                    name: "Bob",
                    email: "bob@gmail.com",
                    phone: "91234568",
                    gender: "Male"
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe("GET /", () => {
        it("should get all contacts record", (done) => {
             chai.request(app)
                 .get('/api/contacts')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.data.should.be.a('array');
                     done();
                  });
         });
    });
});
