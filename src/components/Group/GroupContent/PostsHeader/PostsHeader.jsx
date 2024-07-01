import PostFilter from './PostsFilter'

export default function PostsHeader() {
    return (
        <section>
            <section className="posts-header">
                <PostFilter />
                <button>Write a Post</button>
                <button>Join Group</button>
            </section>
            <div className='post-header-bottom-line'></div>
        </section>
    )
}
