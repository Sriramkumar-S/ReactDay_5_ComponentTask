import Features from "./Features";

const featuresData = [
    {
        "id": 1,
        "shortName": "Fully Responsive",
        "shortDesc": "This theme will look great on any device, no matter the size!",
        "longName": "Fully Responsive Design",
        "longDesc": "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
        "image": "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
    },
    {
        "id": 2,
        "shortName": "Bootstrap 5 Ready",
        "shortDesc": "Featuring the latest build of the new Bootstrap 5 framework!",
        "longName": "Updated for Bootstrap 5",
        "longDesc": "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
        "image": "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
    },
    {
        "id": 3,
        "shortName": "Easy to Use",
        "shortDesc": "Ready to use with your own content, or customize the source files!",
        "longName": "Easy to Use and Customize",
        "longDesc": "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
        "image": "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
    }
]


const Feature = () => {
    return <>
        <div className="main" >
            <div className="row">
                <div className="container">
                    <div className="features" style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#f8f9fa' }}>
                        {featuresData.map((element) => (
                            <Features
                                key={element.id}
                                featureDetails={element}
                                type='feature' />
                        ))}
                    </div>
                    <div className="image-features" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {featuresData.map((element) => (
                            <Features
                                key={element.id}
                                featureDetails={element}
                                type='imageFeature' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Feature;