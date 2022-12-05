const Intern = require("../lib/Intern");

describe("Testing Intern Class", () => {
    it("should be able to create instance", () => {
        // data set up
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com";
        const school = "ana state university";


        // create case
        const intern = new Intern(name, id, email, school);
        
        // make assertion
        expect(intern.name).toBe(name);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
        expect(intern.school).toBe(school);
    })

    it("should have get functions that return the object key values", () => {
        const name = "Lenny"
        const id = 35;
        const email = "lenny@lenny.com";
        const school = "lenny's university";

        const intern = new Intern(name, id, email, school);

        expect(intern.getName()).toBe(name);
        expect(intern.getId()).toBe(id);
        expect(intern.getEmail()).toBe(email);
        expect(intern.getSchool()).toBe(school);
        expect(intern.getRole()).toBe('Intern');
    })
})