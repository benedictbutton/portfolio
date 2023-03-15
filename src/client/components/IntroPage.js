import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from '../assets/profile-pic-1.jpg'

const IntroPage = () => {
    const position = '{ Software Engineer }'
    return (
        <div className="home d-flex flex-grow-1">
            <div className="d-flex flex-grow-1 flex-column align-items-center titles">
                <div className="img-responsive intro">
                    <img
                        src={image}
                        className="img-circle border border-primary border-3 h-100"
                    />
                </div>
                <h1 className="title text-center">Benedict Daly</h1>
                <h3 className="subtitle text-center">{position}</h3>
                <div>
                    <Link to="/home" className="blink">
                        <FontAwesomeIcon
                            className="icon"
                            icon={['far', 'arrow-alt-circle-right']}
                            size="2x"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default IntroPage
