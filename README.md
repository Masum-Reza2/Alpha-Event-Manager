# Website name : Alpha event manager

# Site live at : www.google.com

# Features

- There is a nice authentication system, User can create account in this website.
- Without login user can look after the home page and beauty of the site.
- To deep dive into the website user have to log in first, else user will be redirected to the login page.
- User can toggle between login and register page very easily.
- While login and registration if user give invalid information then the system will catch him/her and give a sweet error.
- There are some private routes that prevent unauthenticated users from loitering.
- User can see the menu items of the woner and cooperate with it before booking.
- After login, logout, registration and any error occurrence user will be notified with react hot toast.

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer : A</b></summary>
<p>

#### Answer: ?

<i>It will console an empty object {}. At fisrt line variable declered but value not assigned, in 2nd line the value assigned, we know that varibles declered with 'let' can be reassigned.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer : C</b></summary>
<p>

#### Answer: ?

<i>It will print string '12', because when we try to calculate number and string, it becaome concatenate.To get the correct result both datatype should be number.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer : A</b></summary>
<p>

#### Answer: ?

<i>It's a nice trick to confuse, but the correct ans is A, because declered variable food is an array, and console.log(food) will print the array. There are some code in the center and they never cause any effect in the main array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer : B</b></summary>
<p>

#### Answer: ?

<i>Here sayHi function takes a parameter(name), and this parameter is used inside the function. When the function was called, the argument never passed, that's why in the place of argument it print undefined, because it never get any value in the require place.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer : C</b></summary>
<p>

#### Answer: ?

<i>Here i want to explain this answer to the point. 0 is a falsy value, thats why the loop never get inside when he see 0 is knocking at the door, and he kick out(ignore) 0 as he is falsy value and as per the condition count became 3.</i>

</p>
</details>
