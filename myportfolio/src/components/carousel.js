import React,{ Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fallwalk from '../images/fallwalkcompressed.png';
import kayak from '../images/3kayakcompressed.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import wgs from "../images/wgspcompressed.png";
import hottub from "../images/m_wgparkhottub_compress.png";
import smallfalls from "../images/tscfallscompressed.png";
import smallrocks from "../images/tspcompressed.png"


export class BootstrapCarouselComponent extends Component {

    render(){
        return (
            <div>
                <div class ='container-fluid'>
                    <div className="row title" style={{ marginBottom: "20px"}}>
                    </div>
                </div>
                <div className='container-fluid'>
                    <Carousel>
                        <Carousel.Item style={{'height':"300px"}}>
                            <img style={{'height':'300px'}}
                            class="center-block w-50"
                            src={fallwalk}
                            alt='fall foliage red and gold colored leaves'/>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            class="center-block w-50"
                            src={kayak}
                            alt='three people kayaking in a river'/>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            class="center-block w-50"
                            src={wgs}
                            alt='a long fall waterfall through a narrow gorge'/>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            class="center-block w-50"
                            src={hottub}
                            alt='waterfall carved hole in rock that looks like a hottub heart'/>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            class="center-block w-50"
                            src={smallfalls}
                            alt='small watefall section small river'/>
                        </Carousel.Item>
                        <Carousel.Item style={{'height':'300px'}}>
                            <img style={{'height':'300px'}}
                            class="center-block w-50"
                            src={smallrocks}
                            alt='small open section of river with small boulders'/>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        )
    }
}

export default BootstrapCarouselComponent;