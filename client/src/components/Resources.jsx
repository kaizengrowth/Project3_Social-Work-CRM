import React from 'react';
import Intake from './Intake';
import ResourceInfo from './ResourceInfo';

class Resources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Resources: null,
      ResourcesDataLoaded: null,
      renderResources: false,
    }
    this.getResources = this.getResources.bind(this);
    this.showResources = this.showResources.bind(this);
  }

  componentDidMount(){
    this.getResources()
  }

  getResources(){
    fetch(`/api/intake/${this.props.studentInfo.studid}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          Resources: res.data.intake,
        });
      }).then(() => {
      this.showResources();
   }).catch(err => console.log(err));
  }

  showResources(){
    if(this.state.Resources){
    this.setState({
      renderResources: true,
      ResourcesDataLoaded: true,
    })
  } else return null
}


  decideWhichToRender() {

    switch (this.state.renderResources) {
      case false:
        return <Intake  studentInfo = {this.props.studentInfo} showResources = {this.showResources} />;
        break;
      case true:
        return <ResourceInfo Resources = {this.state.Resources} ResourcesDataLoaded = {this.state.ResourcesDataLoaded} />;
        break;
      // case 'new':
      //   return <IceCreamForm isAdd={true} iceCreamSubmit={this.iceCreamSubmit} />;
      //   break;
      // case 'edit':
      //   return <IceCreamForm isAdd={false} iceCreamSubmit={this.iceCreamSubmit} icecream={this.state.currentIceCream} />
      //   break;
      // default:
      //   return <Redirect push to="/ice-cream" />;
      //   break;
    }
  }

  render(){
    return (
      <div className= 'resources'>
        {this.decideWhichToRender()}
      </div>
    )
  }
}

export default Resources;
