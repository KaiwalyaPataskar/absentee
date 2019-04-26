import React from 'react';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState(prevState = ({
        isOpen: !prevState
      }
    ))
  }
  
  render(){
    return (
      <Inventory
        isOpen={this.state.isOpen}
      />
    )
  }
}
export default Inventory;