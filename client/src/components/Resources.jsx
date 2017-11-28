import React from 'react';
import Intake from './Intake';
import ResourceInfo from './ResourceInfo';

// HAVE DASHBOARD AND STUDENTPROFILECONTAINER EACH SEND A PROP EQUAL TO EITHER STUDENT OR WORKER.
// GIVE A STATE THAT PROP. WORKER GIVES ACCESS TO AN EDIT/ADD BUTTON, STUDENT DOES CAN JUST READ?

class Resources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showResources: null,
    }
    this.showResources = this.showResources.bind(this);
  }

  componentDidMount(){
    this.showResources()
  }

  showResources(){
    fetch(`/api/intake/${this.props.studentInfo.studid}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          showResources: res.data.intake,
        });
      }).catch(err => console.log(err));
  }

  render(){
    return (
      <div className= 'resources'>

      {this.state.showResources ?

        (<div className= 'resources_header'>
          <ResourceInfo showResources = {this.state.showResources} />
        </div>)

        :

        (<div>
          <Intake  studentInfo = {this.props.studentInfo} showResources = {this.showResources} />
        </div>)}

      </div>
    )
  }
}

export default Resources;
