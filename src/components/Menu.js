import React from 'react';
import {Link} from 'react-router-dom';

function Menu(props){

    function parselower(item){

        let convertedItem = "/" + item.toString().toLowerCase();

        return convertedItem;

    }

    return(

        <nav className='navbar navbar-dark bg-dark navbar-expand-sm justify-content-between px-2'>
            <div className='navbar-brand d-sm-block logo-navbar'>
                {props.titulo}
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div id="myNav" className="collapse navbar-collapse flex-grow-0">

                <ul className="navbar-nav text-center">

                    {props.items_nav.map( (item , index) => {
                     
                            if(item === 'Login'){

                                return(<li key={index} className='nav-item mx-1 item-login'><Link to={parselower(item)} className='nav-link'>{item}</Link></li>);

                            } else {

                                return(<li key={index} className='nav-item mx-1'><Link to={parselower(item)} className='nav-link'>{item}</Link></li>);
                            }
                        }
                                                
                    )}     

                </ul>

            </div>

        </nav>

    );

};

export default Menu