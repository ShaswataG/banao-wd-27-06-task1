import PostFooter from './PostFooter'
import PostActions from './PostActions'
import calendarIcon from '../../../../assets/calendar.svg'
import locationIcon from '../../../../assets/location.svg'

export default function PostMeetup({ post }) {
    return (
        <div className="post-generic post-non-generic">
            <img src={`../../../../../assets/${post.img}`} alt={post.img} />
            <div className="post-generic-content">
                <div className="post-generic-type">{post.type}</div>
                <div className="post-generic-header">
                    <h3 className="post-generic-title">{post.title}</h3>
                    <PostActions />
                </div>
                <div className="post-date-venue">
                    <span className="post-meetup-calendar">
                        <img src={calendarIcon} alt="calendar symbol" />
                        <span>
                            {post.date.day}, {post.date.date} {post.date.month},{' '}
                            {post.date.year}
                        </span>
                    </span>
                    <span className="post-meetup-calendar">
                        <img src={locationIcon} alt="location symbol" />
                        <span>{post.location}</span>
                    </span>
                </div>
                <button className="post-button">{post.button}</button>
                <PostFooter post={post} />
            </div>
        </div>
    )
}
