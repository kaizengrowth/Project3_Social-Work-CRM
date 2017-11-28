import React from 'react';

const ResourceInfo = (props) => {
  return(
    <div className='resource_assistance'>
     {props.ResourcesDataLoaded ?
      (<div>
      {props.Resources.housing ? <p>Here is housing program</p> : null}
      {props.Resources.food ? <p>Here is food program</p> : null}
      {props.Resources.finances ? <p>Here is finances housing program</p> : null}
      {props.Resources.childcare ? <p>Here is childcare program</p> : null}
      {props.Resources.transportation ? <p>Here is transportation program</p> : null}
      {props.Resources.insurance ? <p>Here is insurance program</p> : null}
      {props.Resources.jobsearch ? <p>Here is jobsearch program</p> : null}
      {props.Resources.domesticviolence ? <p>Here is domesticviolence program</p> : null}
      </div>)

      : <h1>Data Loading</h1>}
    </div>

  )
}

export default ResourceInfo
