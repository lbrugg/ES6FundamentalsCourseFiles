describe("classes", function(){

	it("class definition", function() {
		class Employee {
			constructor(name) {
				this.name = name;
			}
			get name() {
				return this._name;
			}
			set name(newValue) {
				this._name = newValue;
			}
			doWork() {
				return `${this.name} is working!`;
			}
		}

		let e = new Employee("Laurel");
		let result = e.doWork();

		expect(result).toEqual("Laurel is working!");

	});

	it("inheritance", function() {
		class Person {
			constructor(name) {
				this.name = name;
			}
			get name() {
				return this._name;
			}
			set name(newValue) {
				this._name = newValue;
			}
			doWork() {
				return `${this.name} is working!`;
			}
		}

		class Employee extends Person {
			doWork() {
				return `${this.name} is working!`;
			}
		}

		let p = new Person("John");
		let e = new Employee("Laurel");
		let result = e.doWork();

		expect(p.name).toEqual("John");
		expect(result).toEqual("Laurel is working!");

	});


	it("using super", function() {
		class Person {
			constructor(name) {
				this.name = name;
			}
			get name() {
				return this._name;
			}
			set name(newValue) {
				this._name = newValue;
			}
			doWork() {
				return `${this.name} is working!`;
			}
		}

		class Employee extends Person {
			constructor(name, title){
				super(name);
				this.title = title;
			}
			get title() {
				return this._title;
			}
			set title(newValue) {
				this._title = newValue;
			}
			doWork() {
				return `${this.name}, ${this.title} is working!`;
			}
		}

		let p = new Person("John");
		let e = new Employee("Laurel", "developer");
		let result = e.doWork();

		expect(p.name).toEqual("John");
		expect(result).toEqual("Laurel, developer is working!");

	});
})