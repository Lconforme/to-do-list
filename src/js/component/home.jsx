import React,{useState} from "react";

//create your first component

const Home = () => {
	const [userEntry, setUserEntry] = useState("")
	const [toDoList, setToDoList] = useState([])
	
	const handleKeyPress= (e) => {
		if(e.key=="Enter"){
			let newToDoList= toDoList.concat(
				userEntry 
			  );
			setToDoList(newToDoList)
		}
	}
	function deleteTasks(index){
		let del =toDoList.filter((item, i) => index !== i)
		setToDoList(del)
	}
	console.log(toDoList)
	return (
		<><div className="text-center">
			<h1 className="text-center mt-5">To Do List!</h1>
			<input onKeyPress={e => handleKeyPress(e)} placeholder="Today's tasks" onChange={e => setUserEntry(e.target.value)} />
			
		</div><div>
			{toDoList.map((item, index)=>{
				return (
					<div key={index}>
						{item}<button onClick={()=>deleteTasks(index)}>Delete</button>
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
