import React from 'react';

const ResourceInfo = (props) => {
  return(
    <div className='resource_assistance'>

      <div className='resource_header'>Your Resources</div>

      {props.showResources.housing ?
        <div className = 'resource_group'>Help with Housing:
          <div className='resource_subheader'></div>
          <a href="http://benefitsplus.cssny.org/benefit-tool/housing-resources">The Community Service Society: Rental Assistance</a><br/>
          <a href="https://www.safehorizon.org/our-services/safe-place-to-stay/">Safe Horizon: Homeless Services</a><br/>
          <a href="http://www.coalitionforthehomeless.org/our-programs/#Housing">Coalition for the Homeless</a><br/>
        </div> : null}

      {props.showResources.food ?
        <div className = 'resource_group'>Assistance with Food:
          <div className='resource_subheader'></div>
          <a href="http://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page">HRA SNAP</a><br/>
        </div> : null}



      {props.showResources.finances ?
        <div className = 'resource_group'>Assistance with Finances:
          <div className='resource_subheader'></div>
          <a href="http://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page">HRA Cash Assistance</a><br/>
          <a href="http://ekstg.laguardia.edu/singlestop/Benefit-Screening-Form/">Single Stop: Benefit Screenings</a><br/>
        </div>
        : null}


      {props.showResources.childcare ?
        <div className = 'resource_group'>Assistance with Childcare:
          <div className='resource_subheader'></div>
          <a href="https://www.dccnyinc.org/">Daycare Council of New York: Childcare Services</a><br/>
          <a href="http://whedco.org/home-based-childcare/">WHEDCo: Childcare Services</a><br/>
        </div>
        : null}

      {props.showResources.transportation ?
        <div className = 'resource_group'>Assistance with Transportation:
          <div className='resource_subheader'></div>
            <a href="#">Transportation Resources will appear here</a><br/>
            <a href="#">And Here</a><br/>
        </div>
        : null}

      {props.showResources.insurance ?
      <div className = 'resource_group'>Assistance with Insurance:
          <div className='resource_subheader'></div>
            <a href="#">Insurance resources will appear here</a><br/>
            <a href="#">And Here</a><br/>
        </div>
        : null}


      {props.showResources.jobsearch ?
      <div className = 'resource_group'>Assistance with your Job Search:
          <div className='resource_subheader'></div>
            <a href="http://bottomlessclosetnyc.org/">Bottomless Closet: Interview and Professional Attire (Womenn, those who identify as Women)</a><br/>
            <a href="#">Grace Outreach: College Prep (Women)</a><br/>
        </div>
        : null}


      {props.showResources.domesticviolence ?
        <div className = 'resource_group'>Support services for Domestic Violence:
          <div className='resource_subheader'></div>
            <a href="#">Domestic Violence Resources Here</a><br/>
            <a href="#">And Here</a><br/>
            <a href="#">And Here</a><br/>
        </div>
        : null}

      {props.showResources.mentalhealth ?
        <div className = 'resource_group'>Mental Health Resources:
          <div className='resource_subheader'></div>
            <a href="http://bottomlessclosetnyc.org/">Bottomless Closet: Interview and Professional Attire (Womenn, those who identify as Women)</a><br/>
            <a href="#">Grace Outreach: College Prep (Women)</a><br/>
        </div>
        : null}

 {/*     {props.showResources.physicalhealth ?
        <div className = 'resource_group'>
          <div className='resource_subheader'>Health Resources:</div>
            <a href="#"></a><br/>
            <a href="#"></a><br/>
        </div>
        : null}

      {props.showResources.legalsvcs ?
        <div className = 'resource_group'>
          <div className='resource_subheader'>Legal Resources:</div>
            <a href="#"></a><br/>
            <a href="#"></a><br/>
        </div>
        : null}
*/}
    </div>

  )
}

export default ResourceInfo
