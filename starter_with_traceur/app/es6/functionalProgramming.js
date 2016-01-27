describe("arrow functions", function(){
	it("es5 way - adding", function() {
		
		var add = function(x, y){
			return x + y;
		}
		expect(add(1, 2)).toBe(3);
	});
	it("es6 way - arrows", function() {

		let add = (x, y) => x + y;

		expect(add(1,2)).toBe(3);

	});

	describe("functions inside maps", function(){
		it("doubles array - es5", function() {
			var array = [1,2,3,4];

			var doubled = array.map(function(n){
				return n*2;
			})

			expect(doubled).toEqual([2,4,6,8]);

		});

		it("doubles array - es6", function() {
			let array = [1,2,3,4];

			let doubled = array.map(n => n*2);

			expect(doubled).toEqual([2,4,6,8]);
		});
	})
});

describe("lexically bind this reference", function(){

	describe("es5 ways", function(){
		it("does not pass this", function(done) {

			this.name = "Laurel";
			setTimeout(function(){
				//because 'this' is now referring to this function
				expect(this.name).not.toBe("Laurel");
				done();
			}, 15)

		});

		it("we can use self", function(done) {

			var self = this;
			self.name = "Laurel";
			setTimeout(function(){
				//because 'this' is now referring to this function
				expect(self.name).toBe("Laurel");
				done();
			}, 15)

		});

		it("we can use bind", function(done) {

			this.name = "Laurel";
			setTimeout(function(){
				//because 'this' is now referring to this function
				expect(this.name).toBe("Laurel");
				done();
			}.bind(this), 15)

		});
	})
	it("using arrow functions", function(done) {

		this.name = "Laurel";
		setTimeout(() => {
			//use the arrow to bind this
			expect(this.name).toBe("Laurel");
			done();
		}, 15)

	});

});

describe("for of", function(){

	it("loops - es5", function() {
		var numbers = [1,2,3,4];

		var sum = 0;
		for(var i in numbers){
			sum += numbers[i];
		}

		expect(sum).toBe(10);

	});

	it("loops - es6", function() {
		let numbers = [1,2,3,4];

		let sum = 0;
		for(let n of numbers){
			sum += n;
		}

		expect(sum).toBe(10);

	});

});