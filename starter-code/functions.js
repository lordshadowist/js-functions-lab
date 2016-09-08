// Question 1
function maxOfTwoNumbers(a, b) 
{
	if(a > b)
	{
		return a;
	}
	return b;
}

// Question 2
function maxOfThree(a, b, c) 
{
	return maxOfTwoNumbers(a, maxOfTwoNumbers(b, c));
}

// Question 3
function isCharacterAVowel(char) 
{
	var vowels = {"a": true, "e": true, "i": true, "o": true, "u": true};
	if(vowels[char])
	{
		return true;
	}
	return false;
}

// Question 4
function sumArray(numbers) 
{
	var sum = 0;
 	for(var i = 0; i < numbers.length; i++)
 	{
 		sum += numbers[i];
 	}
 	return sum;
}


// Question 4
function multiplyArray() 
{
	var product = 0;
 	for(var i = 0; i < numbers.length; i++)
 	{
 		product *= numbers[i];
 	}
 	return product;
}


// Question 5
var numberOfArguments = function(args)
{
  	return arguments.length;
}



// Question 6
var reverseString = function (string)
{
  	var reverse = "";
  	for(var i = string.length; i > 0; i--)
  	{
  		reverse += string[i - 1];
  	}
  	return reverse;
};


// Question 7
function findLongestWord (words) 
{
  	var longest = words[0];
  	for(var i = 0; i < words.length; i++)
  	{
  		if(words[i].length > longest.length)
  		{
  			longest = words[i];
  		}
  	}
  	return longest.length;
}


// Question 8
function filterLongWords (words, i) 
{
  	var result = [];
  	for(var i = 0; i < words.length; i++)
  	{
  		if(words[i].length > i)
  		{
  			result.push(words[i]);
  		}
  	}
  	return result;
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

