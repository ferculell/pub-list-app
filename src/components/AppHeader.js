import React from 'react';
import logo from './logo.png'

const AppHeader = () => {
    return ( 
        <div id="appheader">
            <div className="row">
                <div id="logo" className="col-sm-4">
                    <img src={logo} alt="logo" />
                </div>
                <div id="title" className="col-sm-8">
                    <h1>Publicaciones</h1>
                    <h3>Al presionar en la publicación se muestra el contenido</h3>
                </div>
            </div>
        </div>
     );
}
 
export default AppHeader;