import styles from './Banner.module.css'
import PropTypes from "prop-types";
const Banner = ({ description, height }) => {
    return <>
        <div className={styles['main-div']} style={{ height: height }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ marginTop: (height === '40rem') ? '15%' : '' }} className={styles['header']}>
                            {/* <h1>Generate more leads with a professional landing page!</h1> */}
                            <h1 style={{ fontSize: (height === '20rem') ? '2rem' : '3rem' }}>{description}</h1>
                        </div>
                        <div className={styles['input']} >
                            <form>
                                <div className="mb-3" style={{ display: 'flex' }}>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email Address' style={{ height: '3rem' }} />
                                    <button type="submit" className="btn btn-primary" style={{ marginLeft: '5%' }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

Banner.propTypes = {
    description: PropTypes.string,
    height: PropTypes.string
}

export default Banner;