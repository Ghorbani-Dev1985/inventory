import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../Redux/Posts/postAction";


const PostSaga = () => {
    const [postId , setPostId] = useState("");
    const {loading , error , data} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    return ( 
        <>
        <h1 className="font-bold my-8">ریداکس ساگا - middleware</h1>
        <input className="px-2 py-1 rounded-lg" type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
        <button onClick={() => dispatch(fetchPostsRequest(postId))} className="bg-sky-500 hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 text-white font-bold text-lg px-6 py-2 rounded-lg my-4">ثبت درخواست</button>
        {
            loading ? <p>loading ...</p> :
            error ? <p>{error}</p> :
            data.title ? <div>
                <p>عنوان پست : {data.title}</p>
                <p>متن پست : {data.body}</p>
            </div>
            :
            <p>شماره پست را جهت مشاهده وارد نمایید</p>
        } 
        </>
     );
}
 
export default PostSaga;