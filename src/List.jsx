export function List(){
    const fruits=[{
        fruit:"Apple",
        calories:45,
    },
    {
        fruit:"Orange",
        calories:95,
    },
    {
        fruit:"Banana",
        calories:120,
    },{
        fruit:"Coconut",
        calories:100,
    }];
    const itemList=fruits.map(fruit=>(
        <>
            <li>Item:{fruit.fruit}</li>
            <li>Calories:{fruit.calories}</li>
            <br/>
        </>
    ))
    const highCalories=fruits.filter(fruit=>(fruit.calories>=100));
    const highItemList=highCalories.map(item=>(
         <>
         <li>Fruit:{item.fruit}</li>
         <li>Calories:{item.calories}</li>
         </>
    ))
    return( 
           <ul>
             {highItemList}
        </ul>)
}