import React from "react";

class PromotionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="promotion-block">
        <div className="promotion-text">{"News/Promotion"}</div>
        <button className="button button-default">{"MORE INFORMATION"}</button>
      </div>
    );
  }
}

export default PromotionBlock;
