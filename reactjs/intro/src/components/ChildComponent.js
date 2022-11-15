import ChildOfChild from "./ChildOfChild.js"
import {students,string, doMath} from "./Users.js"

export default function ChildComponent({name}) {
    const companyName = "Kookie"
    const result = 2 + 5
    function getSum(a, b) {
        return a + b
    }
    const printNames = name => name.toUpperCase()
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [a,b,c] = ["Joe", "John", "Jim"]
const style = {
    'color' : 'green',
    'backgroundColor': 'grey'
}
    return <>
        <h1>Hello friend!</h1>
        {/* {alert('hello')} */}
        {/* {10+5} */}
        {<h2>{companyName}</h2>}
        {<h3>{result}</h3>}
        <h3>{getSum(4, 5)}
            <br />
            {printNames("Lila")}</h3>

        {
            numbers.map(num => {
                return <h4>{num}</h4>
            })
        }
        {<h4> {a}
        <br/>
        {b}
        <br/>
        {c}</h4>
           
        }

       { /*import module */}
      {students.map((user)=>{ 
        return <h1 style={style}>{user}</h1>}
     )}
     <h2 style={{"color":"white", "backgroundColor":"blue", "padding":15}}>{string}</h2>
     <h3>{doMath(5,2)}</h3>
{/*ternary operator*/}
{
   students.map((user)=>user === 'Jos' ? <><h2>{user}, vertel je nog eens een verhaal?</h2><p>over de avonturen van flappydappy</p></> : <h2>{user}, heb je Jos ergens gezien?</h2>)
}
<h2>{name}</h2>
<ChildOfChild  newName={name}/>
    </>
}