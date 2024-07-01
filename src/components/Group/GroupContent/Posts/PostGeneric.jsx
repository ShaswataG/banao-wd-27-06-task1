import PostActions from './PostActions'
import PostFooter from './PostFooter'

export default function PostGeneric({ post }) {
    return (
        <div className="post-generic">
            <img src={`../../../../../assets/${post.img}`} alt={post.img} />
            <div className="post-generic-content">
                <div className="post-generic-type">{post.type}</div>
                <div className="post-generic-header">
                    <h3 className="post-generic-title">{post.title}</h3>
                    <PostActions />
                </div>
                <div className="post-generic-description">
                    {post.description}
                </div>
                <PostFooter post={post} />
            </div>
        </div>
    )
}
