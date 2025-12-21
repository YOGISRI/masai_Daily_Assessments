import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
    const { posts } = useContext(PostsContext);
    return (
        <div className="posts-grid">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>

    );
}