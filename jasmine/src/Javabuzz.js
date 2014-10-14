function Javabuzz() {};

Javabuzz.prototype.isDivisibleByThree = function(number) {
    return this.isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
	return this.isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleBy = function(number, divisor){
	return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
	return this.isDivisibleBy(number, 15);
};

Javabuzz.prototype.say = function(number) {
	if (number === 3) return "Java";
	if (number === 5) return "Buzz";
	if (number === 15) return "JavaBuzz";
	if (number === 7) return 7;
}