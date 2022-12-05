const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
    it("should be able to create instance", () => {
        // data set up
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com";

        // create case
        const employee = new Employee(name, id, email);
        
        // make assertion
        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    })

    it("should have get functions that return the object key values", () => {
        const name = "Lenny"
        const id = 35;
        const email = "lenny@lenny.com";

        const employee = new Employee(name, id, email);

        expect(employee.getName()).toBe(name);
        expect(employee.getId()).toBe(id);
        expect(employee.getEmail()).toBe(email);
        expect(employee.getRole()).toBe('Employee');
    })
})