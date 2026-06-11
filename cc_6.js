// Step 2: Employee Base Class
class Employee {
    constructor(name, department) {
        this.name = name; 
        this.department = department; 
        }
        describe() {
            return `${this.name} works in the ${this.department} department.`;

        }
}

//Step 3: Manager Subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
     super(name, department); 
     this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} is a Manager in the ${this.department} department and leads a team of ${this.teamSize} people.`;
    }
}

//Step 4: Create sample employees and managers
const emp1 = new Employee("Andrea Smith", "Marketing");
const emp2 = new Employee("Steven Geller", "Finance");
const mgr1 = new Manager("Aitana Andrade", "Technology", 8);
const mgr2 = new Manager("Carlos Perez", "Operations", 5);

//Step 5: Company class
class Company {
    constructor() {
        this.employees = [];
        }
        addEmployee(employee) {
            this.employees.push(employee);
            }
        listEmployees() {
            this.employees.forEach(employee => {
                console.log(employee.describe());
            });
        }
}

//Step 6: Instantiate Company and add employees
const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);

company.listEmployees();