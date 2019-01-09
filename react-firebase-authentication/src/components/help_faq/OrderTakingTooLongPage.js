import React from 'react'
import ReactDOM from 'react-dom'

import { Link,
  withRouter,
} from 'react-router-dom';


class OrderTakingTooLongPage extends React.Component {
  render() {
    return (
      <div>
        <div>Order Taking Too Long</div>
    </div>
    )
  }
}

ReactDOM.render(<OrderTakingTooLongPage />, document.getElementById('root'));

export default withRouter(OrderTakingTooLongPage);