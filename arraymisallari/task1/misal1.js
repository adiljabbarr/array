//butun telebelerin ededi ortasini tapmaq lazimdir.
let count = 0;
let sum = 0;
let cavab = 0;
const children = [
  {
    name: "Adil",
    age: 20,
    group: "BP207",
    GPA: 70,
  },
  {
    name: "Leyla",
    age: 19,
    group: "BP205",
    GPA: 75,
  },
  {
    name: "Rahib",
    age: 21,
    group: "BP204",
    GPA: 90,
  },
  {
    name: "Aynur",
    age: 22,
    group: "BP202",
    GPA: 65,
  },
];
for (let i = 0; i < children.length; i++) {
  sum = sum + children[i].GPA;
}
cavab = sum / children.length;
console.log(cavab);
