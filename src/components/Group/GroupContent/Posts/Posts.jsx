import posts from '../../../../posts'
import PostGeneric from './PostGeneric'
import PostMeetup from './PostMeetup'
import PostJob from './PostJob'

export default function Posts() {
    const postsList = posts.map((post) => {
        if (/\bmeetup\b/i.test(post.type)) return <PostMeetup post={post} />
        else if (/\bjob\b/i.test(post.type)) return <PostJob post={post} />
        return <PostGeneric post={post} />
    })

    return <section className="posts">{postsList}</section>
}
