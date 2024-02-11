
import PostsList from "components/PostsList"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postsSelector } from "store/posts/selectors"
import { getAllPostsThunk } from "store/posts/thunks"



 
 const PostsPage = () => {
	const dispatch = useDispatch()
	const posts = useSelector(postsSelector)
useEffect(() => {
	!posts && dispatch(getAllPostsThunk())
}, [dispatch, posts])

	return posts&&<PostsList posts={posts}/>
 }
 
 export default PostsPage