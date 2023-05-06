//Given an array of strings, use a function to reverse all the elements in the string in 

//ascending order and the specific elements in descending order





//Given an array of objects, each object representing a person with a name and age 
//property, write a function that returns the sum of all people who are less than 18 years.

function sumUnderagePeople(people){
  let sum = 0;
  for(let i = 0;i <people.length;i++){
    if(people[i].age<18){
      sum += people[i].age;
    }
  }
  return sum
}
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

const sum=sumUnderagePeople(people);
  console.log(sum);



  //Given an array of objects, where each object represents an employee with an 
  //id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

  function salary(employees) {
    const sortedEmployees = employees.slice().sort((a, b) => a.salary - b.salary);
    return sortedEmployees;
  }
  const employees = [
    { id: 1, name: 'Linah', salary: 70000 },
    { id: 2, name: 'Wanjiru', salary: 90000 },
    { id: 3, name: 'Rose', salary: 65000 },
    { id: 4, name: 'Joy', salary: 85000 },
  ];
  const sortedEmployees = salary(employees);
  console.log(sortedEmployees);







