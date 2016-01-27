describe("variables", function(){

	it("hoisting", function() {
		var doWork = function(flag){
			if(flag){
				var x = 3;
			}
			return x;
		}

		var result = doWork(false)
		expect(result).toBeUndefined();

	});

	it("using let - block scoping", function() {
		var doWork = function(flag){
			if(flag){
				let x = 3;
				return x;
			}
		}

		var result = doWork(true)
		expect(result).toEqual(3);

	});

	it("variables - es5 way", function() {
		var a = 1;
		var b = 2
		expect(a).toEqual(1);
		expect(b).toEqual(2);

	});
	it("let & const - es6 way (destructuring)", function() {
		let [a, b] = [1, 2];
		const MY_CONST = 20;

		//MY_CONST = 1
		//get an error in the compiler

		expect(a).toEqual(1);
		expect(b).toEqual(2);
		expect(MY_CONST).toEqual(20);

	});


	it("can destructure objects", function() {
		let doWork = function(){
			return{
				firstName: "Laurel",
				lastName: "Bruggeman",
				twitter: "lbrugg"
			};
		};

		let { firstName, twitter } = doWork();

		expect(firstName).toEqual("Laurel");
		expect(twitter).toEqual("lbrugg");

	});

	it("works with parameters", function(){

		//simulates ajax
		let doWork = function(url, {data, cache}){
			return data;
		}

		let result = doWork(
			"api/test", {
				data: {"results": "results object"},
				cache: false
			});

		expect(result.results).toBe("results object");
	});


	it("default variables", function() {
		let doWork = function(value = 1){
			return value;
		}

		expect(doWork()).toEqual(1);
		expect(doWork(2)).toEqual(2);

	});

	it("rest parameters", function(){
		let sum = function(...numbers){
			let result = 0;
			numbers.forEach(n => result += n);
			return result;
		}

		expect(sum(1,2,3)).toEqual(6);
	});

	it("template literals", function(){
		let category = "music";
		let id = 123

		let url = `http://apiserver/${category}/${id}`;
		expect(url).toEqual('http://apiserver/music/123');
	})

});