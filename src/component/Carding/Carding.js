import './Carding.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Carding = () => {


    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCard(data))


    }, [])
    return (
        <div className='heade-align'>
            <h1>OUR SERVICES</h1>
            <div className="card-details">

                <div className="row">

                    {

                        card.map(cards => <div className='col-md-2'>
                            <div className="carding">
                                <div className="image">
                                    <img className='w-75' src={cards.img} alt="" />
                                </div>
                                <h1>{cards.name}</h1>
                                <p>{cards.desc}</p>
                                <Link to={`/details/${cards.id}`}>
                                    <button className="btn btn-warning">Details</button>
                                </Link>

                            </div>
                        </div>)
                    }


                </div>


            </div>
        </div>
    );
};

export default Carding;