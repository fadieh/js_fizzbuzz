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
	if (this.isDivisibleByFifteen(number) === true) return "JavaBuzz";
	if (this.isDivisibleByThree(number) === true) return "Java";
	if (this.isDivisibleByFive(number) === true) return "Buzz";
	return number;
}