import React,{ Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class BootstrapCarousel extends Component {

    render(){
        return (
            <div>
                <div class ='container-fluid'>
                    <div className="row title" style={{ marginBottom: "20px"}}>
                        <div class="col-sm-12 btn-warning">
                            About Section
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <Carousel>
                        <Carousel.Item style={{'heigh':"300px"}}>
                            <img style={{'height':'300px'}}
                            className="d-block w-100"
                            src={'assets/img/fallwalk.jpg'} 
                            alt='fall foliage red and gold colored leaves'/>
                            <Carousel.Caption>
                                <h3>image one</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            className="d-block w-100"
                            src={'assets/img/mebjoshkayak.jpg'} 
                            alt='three people kayaking in a river'/>
                            <Carousel.Caption>
                                <h3>image 2</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        )
    }
}

export default BootstrapCarousel