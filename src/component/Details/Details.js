import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    let { id } = useParams();


    const [detail, setDetail] = useState([])
    const [datas, setDatas] = useState({})


    useEffect(() => {
        fetch('/fd.JSON')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])
    useEffect(() => {
        const found = detail.find(details => details.id == id)
        setDatas(found)
    }, [detail])

    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src={datas?.img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{datas?.name}</Card.Title>
                    <Card.Text>
                        {datas?.desc}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

        </>
    );
};

export default Details;