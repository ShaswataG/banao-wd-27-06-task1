import recommendedGroups from "../../../../recommendedGroups"
import RecommendedGroup from "./RecommendedGroup"
import thumbUp from '../../../../assets/thumb-up.svg'

export default function RecommendedGroups() {
    const recommendedGroupsList = recommendedGroups.map(recommendedGroup => {
        return <RecommendedGroup img={recommendedGroup.img} title={recommendedGroup.title} followed={recommendedGroup.followed} />
    })

    return (
        <div className="recommended-groups-outer-container">
            <span>
                <img src={thumbUp} alt='Thumb up' />
                <p>RECOMMENDED GROUPS</p>
            </span>
            {recommendedGroupsList}
            <a href="#">See More...</a>
        </div>
    )
}