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
         
            <Card>
        <Card.Body>
        <h3 className="align">
          {datas?.name}
          </h3>
          <Card.Text className="align">
          {datas?.desc}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={datas?.img} />
      </Card>

     
        </>
    );
};

export default Details;