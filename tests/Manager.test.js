const Manager = require("../lib/Manager");

describe("Testing Manager Class", () => {
    it("should be able to create instance", () => {
        // data set up
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com";
        const officeNumber = 1;


        // create case
        const manager = new Manager(name, id, email, officeNumber);
        
        // make assertion
        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeNumber).toBe(officeNumber);
    })

    it("should have get functions that return the object key values", () => {
        const name = "Lenny"
        const id = 35;
        const email = "lenny@lenny.com";
        const officeNumber = 2;

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getName()).toBe(name);
        expect(manager.getId()).toBe(id);
        expect(manager.getEmail()).toBe(email);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
        expect(manager.getRole()).toBe('Manager');
    })
})