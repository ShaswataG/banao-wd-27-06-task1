import PostFilter from './PostsFilter'

export default function PostsHeader() {
    return (
        <section className="posts-header">
            <PostFilter />
            <button>Write a Post</button>
            <button>Join Group</button>
        </section>
    )
}
