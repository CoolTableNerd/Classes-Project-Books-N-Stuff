# Classes-Project-Books-'N-Stuff

Books-'N-Stuff is a program giving the opportunity to build what organizing a library would look like through software. 

this project consisted of three classes inside one file: Media (parent|super class) / Book,Movie,CD (child|sub class)

Books-'N-Stuff sparked challenge and showcased what a real-world problem would look like using Classes, getters/setter, methods, and instances. 

## task i struggled with but learned from:  

**line 20-28: (instructions: create a method named toggleCheckOutStatus that changes the value saved to the `_.isCheckedOut` property. if `true` change to `false` and vise-versa)**

when reading the instructions to change the property from true to false or false to true, i instantly jumped to assuming a condition statement is needed when there is a much simpler way. the if-else condition created 6 lines of code when it requires one. my condition code does complete the task, so it's not wrong, just inefficient in the name of runtime. `this._isCheckedOut = !this._isCheckedOut` also looks much cooler. 

**line 30-34: (instructions: return the average value of <b>ratings</b> array the reduce method to find the sum of ratings array. Divide the sum by the length of the ratings array and return the result)**

i was just introduced to the reduce method, so i went to the documentation to see how i was to implement the method inside my code. the documentation was a bit confusion leaving me to explore wrong doings trying to use the method. i tried dividing inside the method. i attached the method to the wrong property -- a mess. here's how i would explain using the reduce method: 

the `reduce` method in JavaScript goes through each item in an array and uses a special function to combine them into a single value. think of it as taking a list of numbers and adding them up one by one until you have a total. this special function looks at each item in the list, remembers the result so far, and then uses that result when it looks at the next item. this way, by the time it checks every item, you end up with one final answer.

reasons you'd want to use `reduce` method: 
- summing up Number: `const totalScore = scores.reduce((total, current) => total + current, 0);`
- averaging Values: `const averageGrade = grades.reduce((total, current) => total + current, 0) / grades.length;`
- finding Maximum | Minimum values: `const maxNumber = numbers.reduce((max, current) => current > max ? current : max, numbers[0]);`
- counting Instances of Values: `const fruitCount = fruits.reduce((count, fruit) => {count[fruit] = (count[fruit] || 0) + 1;});`

<br>
<br>

**classes Project via codecademy**
