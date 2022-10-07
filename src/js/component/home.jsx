
import React,{useEffect, useState} from "react";

//create your first component

const Home = () => {
	const [userEntry, setUserEntry] = useState("")
	const [toDoList, setToDoList] = useState([])
	
useEffect(()=>{
getToDos()
},[])

function creatingToDos(userEntry) {
	let newToDoList= toDoList.concat(
		{
			label: userEntry,
			done: false
		} 
	  );
	fetch('https://assets.breatheco.de/apis/fake/todos/user/lconforme', {
		method:"PUT",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(newToDoList)
	})
	.then((resp)=>{
		resp.status===200?setToDoList(newToDoList):""
	})
	.catch((error)=>console.log("error",error))
}

function handleKeyPress(e) {
	if(e.key=="Enter"){
		creatingToDos(userEntry)
	}
}

function getToDos() {
	fetch('https://assets.breatheco.de/apis/fake/todos/user/lconforme', 
    )
    .then(resp => {    
    return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        setToDoList(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
}

	function deleteTasks(index){
		let del =toDoList.filter((item, i) => index !== i)
		setToDoList(del)
	}
	console.log(toDoList)
	return (
		<><div className="text-center">
			<h1 className="text-center mt-5">To Do List!</h1>
			<input onKeyPress={(e)=>handleKeyPress(e)} placeholder="Today's tasks" value={userEntry} onChange={e => setUserEntry(e.target.value)} />
			
		</div><div>
			{toDoList.map((item, index)=>{
				return (
					<div key={index}>
						{item.label}<button onClick={()=>deleteTasks(index)}>Delete</button>
					</div>
				)
			})}
			</div>
			<div>
			{toDoList.length + "items left"}	
			</div></>
	);
};

export default Home;
