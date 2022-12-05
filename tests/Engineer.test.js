const Engineer = require("../lib/Engineer");

describe("Testing Engineer Class", () => {
    it("should be able to create instance", () => {
        // data set up
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com";
        const github = "anagithub";


        // create case
        const engineer = new Engineer(name, id, email, github);
        
        // make assertion
        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.github).toBe(github);
    })

    it("should have get functions that return the object key values", () => {
        const name = "Lenny"
        const id = 35;
        const email = "lenny@lenny.com";
        const github = "lennygithub";

        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getName()).toBe(name);
        expect(engineer.getId()).toBe(id);
        expect(engineer.getEmail()).toBe(email);
        expect(engineer.getGithub()).toBe(github);
        expect(engineer.getRole()).toBe('Engineer');
    })
})