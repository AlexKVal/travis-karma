import React from 'react';

const DivMega = React.createClass({

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

export default DivMega;
