import React from 'react';

const ResourceInfo = (props) => {
  return(
    <div className='resource_assistance'>
      <h2>Your Resources</h2>  <br /> <hr /> <br />
      {props.showResources.housing ?
        <div className = 'resource_group'>
          <h4>Help with Housing:</h4> <br />
          <a href="http://benefitsplus.cssny.org/benefit-tool/housing-resources">The Community Service Society: Rental Assistance</a><br/>
          <a href="https://www.safehorizon.org/our-services/safe-place-to-stay/">Safe Horizon: Homeless Services</a><br/>
          <a href="http://www.coalitionforthehomeless.org/our-programs/#Housing">Coalition for the Homeless</a><br/>
          <br />
        </div> : null}

      {props.showResources.food ?
        <div className = 'resource_group'>
          <h4>Assistance with Food:</h4> <br />
          <a href="http://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page">HRA SNAP</a><br/>
          <br />
        </div> : null}



      {props.showResources.finances ?
        <div className = 'resource_group'>
          <h4>Assistance with Finances:</h4> <br />
          <a href="http://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page">HRA Cash Assistance</a><br/>
          <br />
        </div>
        : null}


      {props.showResources.childcare ? <p>Here is childcare program</p> : null}
      {props.showResources.transportation ? <p>Here is transportation program</p> : null}
      {props.showResources.insurance ? <p>Here is insurance program</p> : null}
      {props.showResources.jobsearch ? <p>Here is jobsearch program</p> : null}
      {props.showResources.domesticviolence ? <p>Here is domesticviolence program</p> : null}
    </div>

  )
}

export default ResourceInfo
