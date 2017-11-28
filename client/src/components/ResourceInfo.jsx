import React from 'react';

const ResourceInfo = (props) => {
  return(
    <div className='resource_assistance'>
      <h3>Your Resources</h3>
      {props.showResources.housing ?
        <div className = 'resource_group'>
          <h4>Help with Housing:</h4>
          <a href="http://benefitsplus.cssny.org/benefit-tool/housing-resources">The Community Service Society: Rental Assistance</a><br/>
          <a href="https://www.safehorizon.org/our-services/safe-place-to-stay/">Safe Horizon: Homeless Services</a><br/>
          <a href="http://www.coalitionforthehomeless.org/our-programs/#Housing">Coalition for the Homeless</a><br/>
        </div> : null}

      {props.showResources.food ?
        <div className = 'resource_group'>
          <h4>Assistance with Food:</h4>
          <a href="http://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page">HRA SNAP</a><br/>
        </div> : null}



      {props.showResources.finances ? <p>Here is finances housing program</p> : null}
      {props.showResources.childcare ? <p>Here is childcare program</p> : null}
      {props.showResources.transportation ? <p>Here is transportation program</p> : null}
      {props.showResources.insurance ? <p>Here is insurance program</p> : null}
      {props.showResources.jobsearch ? <p>Here is jobsearch program</p> : null}
      {props.showResources.domesticviolence ? <p>Here is domesticviolence program</p> : null}
    </div>

  )
}

export default ResourceInfo
