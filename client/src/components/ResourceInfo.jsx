import React from 'react';

const ResourceInfo = (props) => {
  return(
    <div className='resource_assistance'>
      {props.showResources.housing ? <p>Here is housing program</p> : null}
      {props.showResources.food ? <p>Here is food program</p> : null}
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
