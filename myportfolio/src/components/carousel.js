import React,{ Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../images/fallwalkcompressed.png';
import '../images/3kayakcompressed.png'

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
                        <Carousel.Item interval={500} style={{'heigh':"300px"}}>
                            <img style={{'height':'300px'}}
                            class="d-block w-100"
                            src='../images/fallwalkcompressed.png'
                            alt='fall foliage red and gold colored leaves'/>
                            <Carousel.Caption>
                                <h3>image one</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            class="d-block w-100"
                            src={require('../images/3kayakcompressed.png')} 
                            alt='three people kayaking in a river'/>
                            <Carousel.Caption>
                                <h3>image 2</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <img src={require('../images/fallwalkcompressed.png')} alt="fall foliage red and yellow" />
                </div>

            </div>
        )
    }
}

export default BootstrapCarousel;