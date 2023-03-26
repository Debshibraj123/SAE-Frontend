import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import '.././../assets/scss/style.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

//   var Iframe = React.createClass({     
//   render: function() {
//     return(         
//       <div>          
//         <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
//       </div>
//     )
//   }
// });

// ReactDOM.render(
//   <Iframe src="http://plnkr.co/" height="500" width="500"/>,
//   document.getElementById('example')
// );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>


          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />

            {/* <div className='overflow-hidden'>
                <div className='flex -mx-4 img-ticker'>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/> */}

                {/* copy set of images */}
                  {/* <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>
                    <Image className='w-64 mx-4 self-start flex-none' src={require('./../../assets/images/features-split-image-01.png')}/>

                </div>
            </div>        */}

        
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;