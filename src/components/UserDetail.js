import React,{useState, useEffect} from 'react'
import axios from 'axios';
import '../assets/css/UserDetail.css'


function UserDetail({id,todoId,todoTitle}) {


    const baseURL = "https://jsonplaceholder.typicode.com/users/";
    const[userData,setUserData]=useState();


    useEffect(()=>{
    

        
        async function fetchUserData() {
        await axios.get(`${baseURL}${id}`)
            .then(request => {
                console.log(request.data);
                setUserData(request.data);
                return request;
            })
            .catch(err => {
                console.log(err);
            });

        }
        if(id !== undefined)
        fetchUserData();


    },[id]);

    return (
        <div>
            <h2 className="user-detail-txt">User Detail </h2>
            <div className="right-table">
            <table >
                <tr className="right-tr">
                    <td className="right-td">Todo Id</td>
                    <td  className="right-td-rr">{todoId}</td>
                </tr>
                <tr className="right-tr" >
                    <td className="right-td">Todo Title</td>
                    <td className="right-td-rr">{todoTitle}</td>
                </tr>
                <tr className="right-tr">
                    <td className="right-td">User Id</td>
                    <td className="right-td-rr">{userData?.id}</td>
                </tr>
                <tr className="right-tr">
                    <td className="right-td">Name</td>
                    <td className="right-td-rr">{userData?.name}</td>
                </tr>
                <tr className="right-tr">
                    <td className="right-td">Email</td>
                    <td className="right-td-rr">{userData?.email}</td>
                </tr>

            </table>
            </div>
        </div>
    )
}

export default UserDetail
