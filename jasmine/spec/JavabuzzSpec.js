describe('Javabuzz', function() {

	var javabuzz;

	beforeEach(function() {
      javabuzz = new Javabuzz();
	});

	describe('knows when a number is', function () {

		it('divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('not divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('divisible by 5', function() {
			expect(javabuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('not divisible by 5', function() {
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
		});

		it('divisible by 15', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
		});

	});

	describe('The actual game does this', function() {
		it('says Java not 3',function(){
          expect(javabuzz.say(3)).toEqual("Java")
		});

		it('says Buzz not 5',function(){
			expect(javabuzz.say(5)).toEqual("Buzz")
		});

		it('says JavaBuzz not 15',function(){
			expect(javabuzz.say(15)).toEqual("JavaBuzz")
		});

		it('just gives the number back', function(){
			expect(javabuzz.say(7)).toEqual(7)
		})

		it('works upto 100 and beyond', function(){
			expect(javabuzz.say(9)).toEqual("Java")
		})

		it('works upto 100 and beyond', function(){
			expect(javabuzz.say(30)).toEqual("JavaBuzz")
		})
	});

	describe('Now the game...', function(){
		it('calls isDivisibleBy 100 times', function(){
			spyOn(javabuzz, 'isDivisibleBy');
			javabuzz.go();
			expect(javabuzz.isDivisibleBy).toHaveBeenCalled();
		})
	})
});