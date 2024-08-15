import PropTypes from 'prop-types';
import './People.css'

const People = ({ name, image, comments }) => {
    return <>
        <div className="col-lg-4 text-center" style={{ padding: '16px' }}>
            <div className="people-details">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{`"${comments}"`}</p>
            </div>
        </div>
    </>
}

People.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    comments: PropTypes.string
}

export default People