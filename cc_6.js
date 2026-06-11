// Step 2: Employee Base Class
class Employee {
    constructor (name, department) {
        this.name = name; 
        this.department = department; 
        }
        describe() {
            return `$ {this.name} works in the ${this.department} department.`;

        }
}

//Step 3: Manager Subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
     super (name, department); 
     this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} is a Manager in the ${this.department} department and leads a team of ${this.teamSize} people.`;
    }
}
