import coverImg from '../../assets/cover/cover.svg'


export default function GroupCover() {
    return (
        <section className="group-cover">
            <img src={coverImg} alt="Snow" />
            <div>
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </section>
    )
}