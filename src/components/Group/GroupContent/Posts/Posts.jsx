import posts from '../../../../posts'
import PostGeneric from './PostGeneric'
import PostMeetup from './PostMeetup'
import PostJob from './PostJob'

export default function Posts() {
    const postsList = posts.map((post) => {
        if (/\bmeetup\b/i.test(post.type))
            return (
                <PostMeetup
                    img={posts[2].img}
                    type={posts[2].type}
                    title={posts[2].title}
                    date={posts[2].date}
                    location={posts[2].location}
                    views={posts[2].views}
                    button={posts[2].button}
                    author={posts[2].author}
                />
            )
        else if (/\bjob\b/i.test(post.type))
            return (
                <PostJob
                    type={posts[3].type}
                    title={posts[3].title}
                    company={posts[3].company}
                    location={posts[3].location}
                    views={posts[3].views}
                    button={posts[3].button}
                    author={posts[3].author}
                />
            )
        return (
            <PostGeneric
                img={post.img}
                type={post.type}
                title={post.title}
                description={post.description}
                views={post.views}
                author={post.author}
            />
        )
    })

    return <section className="posts">{postsList}</section>
}
