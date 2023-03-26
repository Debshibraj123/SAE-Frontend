import React from 'react';
import classNames from 'classnames';
import "../assets/css/events.css";
// import "../components/elements/eventsCarousel.js";

const Events = () => {
  return (
<>


 <div class="event-wrapper">
 <div class="event-hero">
  <h1 className='event-h1 stroke-shadow'>
    <a href="#">OUR EVENTS</a>
    </h1>
</div> 
</div>
<div className='heading1'>
<h1 >Drag and Drift</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus doloremque, illum voluptatibus aut voluptate similique dolore reprehenderit. Nulla possimus quibusdam quis, quisquam molestiae perferendis dignissimos deleniti ullam corporis ipsum quaerat.</p>
</div>

{/* Drag and Drift contents */}

<section class="DandD-section">
  <div class="DandDgrid">
    <div class="item">
    </div>
    <div class="item item--large">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item item--large">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item">
    </div>
  </div>
</section>


<div className='heading1'>
<h1 >Self Driving Vehicle</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus doloremque, illum voluptatibus aut voluptate similique dolore reprehenderit. Nulla possimus quibusdam quis, quisquam molestiae perferendis dignissimos deleniti ullam corporis ipsum quaerat.</p>
</div>

{/* Self Driving Vehicle contents */}
<section class="sdvSection">

<div class="sdv-grid">

<div class="sdv-item item--large">
  </div>
  <div class="sdv-item item--medium">
  </div>

  <div class="sdv-item">
  </div>

  <div class="sdv-item item--medium">
  </div>
 
  <div class="sdv-item">
  </div>
</div>
</section>
</>
  )
}

export default Events
