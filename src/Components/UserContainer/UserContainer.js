import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/User/userAction";


const UserContainer = () => {
   const userData = useSelector((state) => state.user);
   console.log(userData);
   const {data , error , loading} = userData;
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(fetchUsers());
   }, []);
   
   const renderUsers = () => {
    if(loading) return <p>لطفا چند لحظه صبر نمایید ...</p>
    if(!loading && error) return <p>{error}</p>
    if(!loading && !error && userData && data.length) return (
        <div>
        <h1>لیست کاربران</h1>
        {data.map((user) => (<p key={user.id} className="bg-white p-2 rounded-lg my-3 text-center">{user.name}</p>))}
        </div>
    );
   };
    return <div>{renderUsers()}</div>;
}
 
export default UserContainer;


{/* <div>{loading ? (
    <p>لطفا صبر نمایید...</p>) : 
    error ? (<p>{error}</p>) : 
    
    (userData && users &&users.length && (
        users.map((user) => (
            <p key={user.id}>{user.name}</p>
            )))
    )}</div> */}