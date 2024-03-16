import { fetchAllUsers } from "./Slices/users.slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Styles/loader.css';
function Users(){
 
    const users= useSelector((state) => state.users);
    //in calback state get the complete data to users
    console.log(users);
    //agaian we need to create dispatch instance to get thedata
    const dispatch= useDispatch();
    useEffect(() =>{
        dispatch(fetchAllUsers());
    },[]);
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2 className="text-center">users page</h2>
                    {users.isloading ? (//is loader is true it will show the loader symbol
                        <div className="loader-container">
                        <span class="loader"></span>
                        </div>
                    ):(// if it fasle it will show the load data 
                        <div>
                            {users.data.map(user =>(
                                <div>{user.id}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}
export default Users;