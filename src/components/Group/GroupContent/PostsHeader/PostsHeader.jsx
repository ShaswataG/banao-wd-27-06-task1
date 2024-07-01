import PostFilter from './PostsFilter'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function PostsHeader() {
    return (
        <section>
            <section className="posts-header">
                <PostFilter />
                <DropdownButton
                    as={ButtonGroup}
                    key="write-post"
                    id={`write-post`}
                    variant="secondary"
                    title="Write a Post"
                />
                <button>Join Group</button>
            </section>
            <div className="post-header-bottom-line"></div>
        </section>
    )
}
