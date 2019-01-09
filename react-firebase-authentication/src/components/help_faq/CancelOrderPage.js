import React from 'react'
import ReactDOM from 'react-dom'

import { Link,
  withRouter,
} from 'react-router-dom';


class CancelOrderPage extends React.Component {
  render() {
    return (
      <div>
        <div>Cancel Order</div>
    </div>
    )
  }
}

ReactDOM.render(<CancelOrderPage />, document.getElementById('root'));

export default withRouter(CancelOrderPage);