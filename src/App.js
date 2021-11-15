import './App.css';
import React,{useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import axios from 'axios';
import UserDetail from './components/UserDetail';



function App() {
  const[todos,setTodos]=useState();
  const[currUser,setCurrUser]=useState(1);
 

  useEffect(()=>{
 

    
    async function fetchList() {
      await axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(request => {
              console.log(request.data);
              setTodos(request.data);
              return request;
          })
          .catch(err => {
              console.log(err);
          });

    }

    fetchList();


  },[]);



  return (
    <div className="app">

      <NavBar />


      <div className="app-body">
        <div className="left">
            <table>
              <thead className="left-thead">
                <td className="table-header">To Do IDs</td>
                <td className="table-header">Title</td>
                <td className="table-header">Status</td>
                <td className="table-header">Action</td>
              </thead>

              <tbody>
                {todos?.map(row=>{
                
                    return(

                      <tr key={row.id} className="left-tr">
                        <td className="left-td-list l1">{row.userId}</td>
                        <td className="left-td-list l2">{row.title}</td>
                        <td className="left-td-list l3">{row.completed ? "Complete" : "Incomplete"}</td>
                        <td className="left-td-list l4"><button onClick={()=>{setCurrUser(row)}}>View User</button></td>
                      </tr>

                    )


                })}
              </tbody>



            </table>
        </div>

        <div className="right">
              <UserDetail id={currUser?.id} todoId={currUser?.userId} todoTitle={currUser.title} />
        </div>

      </div>



    </div>
  )
}

export default App;
