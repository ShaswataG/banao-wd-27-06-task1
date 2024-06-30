import shareButton from '../../../../assets/share-post-button.svg';

export default function PostMeetup(props) {
    return (
        <div className="post-generic">
            <p className="post-generic-type">{props.type}</p>
            <h3 className="post-generic-title">{props.title}</h3>
            <p className="post-generic-description">{props.description}</p>
            <div>
                <span>
                    <img src='../../../../assets/calendar.svg' alt='calendar symbol'/>
                    <p>{props.company}</p>
                </span>
                <span>
                    <img src='../../../../assets/location.svg' alt='location symbol'/>
                    <p>{props.location}</p>
                </span>
            </div>
            <button>{props.button}</button>
            <div>
                <span className="post-generic-author">{props.author}</span>
                <span className='post-views-and-share'>
                    <span>{props.views}</span>
                    <img src={shareButton}  alt="share button"/>
                </span>
            </div>
        </div>
    )
}