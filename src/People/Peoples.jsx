import People from './People'
import './People.css'

const peopleData = [{
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    name: "Margaret E",
    comments: "This is fantastic! Thanks so much guys!"
},
{
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    name: "Fred S",
    comments: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
}, {
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    name: "Sarah W",
    comments: "Thanks so much for making these free resources available to us!"
}
]

const Peoples = () => {
    return <>
        <div className="main-box">
            <div className="container">
                <div className="row" style={{ padding: '8% 0', height: '40rem' }}>
                    <div className="col lg-12 text-center">
                        <h2>What people are saying...</h2>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {peopleData.map((element) => (
                            <People
                                key={element.name}
                                name={element.name}
                                image={element.image}
                                comments={element.comments}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Peoples;