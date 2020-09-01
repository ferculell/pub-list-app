import React, { useState, useEffect } from 'react';

const PublicationsList = () => {

    const [publications, SetPublications] = useState([])

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const publicationsData = await data.json()
        SetPublications(publicationsData)
    }

    return ( 
        <div id="accordion">
            {
                publications.map(item => (
                    <div className="card border-info m-2" key={item.id}>
                        <div className="card-header">
                            <a className="collapsed card-link stretched-link text-info" data-toggle="collapse" href={"#collapse" + item.id}>
                                <div className="row">
                                    <div className="col-sm-1">
                                        <img src={process.env.PUBLIC_URL + '/img/' + item.userId + '.png'} alt="avatar" width="50" />
                                    </div>
                                    <div className="col-sm-11">
                                        <h4 className="card-title">{item.title}</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id={"collapse" + item.id} className="collapse" data-parent="#accordion">
                            <div className="card-body text-dark">
                                <p className="card-text">{item.body}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default PublicationsList;