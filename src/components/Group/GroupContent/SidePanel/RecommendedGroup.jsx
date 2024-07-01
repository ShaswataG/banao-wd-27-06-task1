export default function RecommendedGroup(props) {
    return (
        <div className="recommended-group-container">
            <div className="recommended-group">
                <img
                    src={`/banao-wd-27-06-task1/assets/${props.img}`}
                    alt={props.title}
                />
                <p>{props.title}</p>
            </div>
            <button>{props.followed ? <p>Unfollow</p> : <p>Follow</p>}</button>
        </div>
    )
}
