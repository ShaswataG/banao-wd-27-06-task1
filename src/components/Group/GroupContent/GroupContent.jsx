import PostsHeader from './PostsHeader/PostsHeader'
import Posts from './Posts/Posts'
import SidePanel from './SidePanel/SidePanel'

export default function GroupContent() {
    return (
        <>
            <PostsHeader />
            <section className='group-content-inner-container'>
                <Posts />
                <SidePanel />
            </section>
        </>
    )
}
