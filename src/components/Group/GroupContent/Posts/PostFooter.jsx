import shareButton from '../../../../assets/share-post-button.svg'

export default function PostFooter({ post }) {
    return (
        <div className="post-footer">
            <div className='post-author'>
                <img
                    src={`../../../../../assets/${post.authorPic}`}
                    alt="author-pic"
                />
                <span className="post-generic-author">{post.author}</span>
            </div>
            <span className="post-views-and-share">
                <span>{`${post.views} views`}</span>
                <img src={shareButton} alt="share button" />
            </span>
        </div>
    )
}
