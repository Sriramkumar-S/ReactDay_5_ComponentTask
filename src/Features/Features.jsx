import PropTypes from 'prop-types';
import './Feature.css'
const Features = ({ featureDetails, type }) => {
    return <>
        {/* {console.log('featureDetails in child', featureDetails, type)} */}
        {type === 'feature' &&
            <div className="col-lg-4 text-center" style={{ padding: '3rem' }}>
                <p>
                    {featureDetails.id === 1 &&
                        <i className="fa-regular fa-window-restore fa-3x" style={{ color: '#0b5ed7' }}></i>
                    }
                    {featureDetails.id === 2 &&
                        <i className="fa-solid fa-layer-group  fa-3x" style={{ color: '#0b5ed7' }}></i>
                    }
                    {featureDetails.id === 3 &&
                        <i className="fa-solid fa-users-rectangle fa-3x" style={{ color: '#0b5ed7' }}></i>
                    }
                </p>
                <h2>{featureDetails.shortName}</h2>
                <p>{featureDetails.shortDesc}</p>
            </div>
        }
        {type === 'imageFeature' &&
            <div className="col-lg-12" >
                {featureDetails.id !== 2 &&
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className="col-lg-6">
                            <div className="contents">
                                <h2>{featureDetails.longName}</h2>
                                <p>{featureDetails.longDesc}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={featureDetails.image} alt={featureDetails.shortName} style={{ height: '32rem', width: '100%' }} />
                        </div>
                    </div>
                }
                {(featureDetails.id === 2) &&
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className="col-lg-6">
                            <img src={featureDetails.image} alt={featureDetails.shortName} style={{ height: '32rem', width: '100%' }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="contents">
                                <h2>{featureDetails.longName}</h2>
                                <p>{featureDetails.longDesc}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        }
    </>
}

Features.propTypes = {
    featureDetails: PropTypes.shape({
        shortName: PropTypes.string,
        shortDesc: PropTypes.string,
        longName: PropTypes.string,
        longDesc: PropTypes.string,
        image: PropTypes.string,
        id: PropTypes.number
    }),
    type: PropTypes.string
}

export default Features