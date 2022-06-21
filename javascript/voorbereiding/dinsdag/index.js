console.log("hello")

//object => key: value
let person = {
    name:"Jan",
    age: 25,
    woonplaats: "Antwerpen"
};
console.log(person.name);
console.log(person.age);
//backtics
console.log(`deze persoon heet ${person.name}, is ${person.age} jaar oud en woont in ${person.woonplaats}`)

//object in een object
var student = {
    naam: "John",
    leeftijd: 30,
    email: "john@john.com",
    adres: { 
        land: "Belgium",
        stad: "Brussels",
        straat: "Rue de la paix",
        postcode: 1000
    }
};
console.log(student)
//key toevoegen: isStudent
student = {...student, isStudent: true}
console.log(student)
console.log(student.adres.straat)
console.log(student["adres"]["stad"])

//for in loop
// for(let i in student){
//     console.log(i)//geeft keys van object
//     console.log(student[i])//geeft values van object)
// } >>Niet gebruikt<<


//oefening: zet de naam, leeftijd en stad in html in een tabel
document.querySelector(".container>table>tbody").innerHTML = `<tr><td>${student.naam}</td> 
<td>${student.leeftijd}</td> 
<td>${student.adres.stad}</td>
</tr>`


//array
let arr1 = [1,2,3,4,5];
arr1 += 3;
console.log(arr1[0]);
let arr2 = ["Lies", "Jan", "Jos"];
console.log(arr2)
arr2[1] = "Janne"; //vervangen van een element in de array
console.log(arr2);
//spread operator
arr2 = [...arr2,"Piet" ] ; //voegt een element toe aan de array
console.log(arr2)
arr2.push("Marc");  //voegt een element toe aan de array
console.log(arr2);

//objects in arrays
let students = [
    {naam:"Jan", leeftijd: 25, woonplaats: "Antwerpen"},
    {naam:"Jos", leeftijd: 20, woonplaats: "Gent"},
    {naam:"Klaas", leeftijd: 31, woonplaats: "Hasselt"}
]
console.log(students.length)
console.log(students[0].naam)
//for loop
//id toevoegen
for(let i = 0; i < students.length; i++){
console.log(students[i].naam + ":" + students[i].leeftijd)
students[i].id = i
}
console.log(students)
let studenten = [
    {
        naam: "John",
        leeftijd: 30,
        email: "john@john.com",
        isStudent: true,
        adres: {  //object in een object
            land: "Belgium",
            stad: "Brussels",
            straat: "Rue de la paix",
            postcode: 1000
        }
    },
    {
        naam: "Jane",
        leeftijd: 25,
        email: "jane@joemal.com",
        isStudent: true,
        adres: {  //object in een object
            land: "Belgium",
            stad: "Gent",
            straat: "Vredesplein",
            postcode: 9000
        }
    },
    {
        naam: "Jeroen",
        leeftijd: 28,
        email: "jj@yahoo.com",
        isStudent: true,
        adres: {  //object in een object
            land: "Belgium",
            stad: "Antwerpen",
            straat: "Antwerpsestraat",
            postcode: 2000
        }
    }
]
console.log(studenten[1].adres.straat)
studenten[0].isStudent = false;

console.log(studenten) 
console.log(studenten.length)
console.log(studenten.naam) //geeft undefined
//methoden om de verschillende studenten te tonen zonder index nummers
//map method
studenten.map((stud)=>{
    console.log(stud.naam)
}   )

//meerdere studenten in de tabel zetten
//map functie
studenten.map((studentI)=>{
    document.querySelector(".container>table>tbody").innerHTML += 
        `<tr>
    <td>${studentI.naam}</td> 
    <td>${studentI.leeftijd}</td> 
    <td>${studentI.adres.stad}</td>
    </tr>`})

//OEFENING
//id invoegen bij elke student
 let id = 1;
studenten.map((studentID)=>{
    console.log(studentID)
   studentID.id = id ++;
})

//andere loop methodes zie op w3schools

console.log(studenten)


