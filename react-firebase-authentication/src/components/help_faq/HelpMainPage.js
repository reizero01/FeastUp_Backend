import React from 'react'
import ReactDOM from 'react-dom'
import * as routes from '../../constants/routes';

import { Link,
  withRouter,
} from 'react-router-dom';


class HelpMainPage extends React.Component {
  render() {
    return (
      <div>
        <div>Help Page</div>
        <div>
          <button onClick={()=> {this.props.history.push(routes.ISSUE_WITH_ORDER)}}>
            Issue with Order
          </button>
        </div>
        <div>
          <button onClick={()=> {this.props.history.push(routes.ORDER_TAKING_TOO_LONG)}}>
            Order Taking too Long
          </button>
        </div>
        <div>
          <button onClick={()=> {this.props.history.push(routes.CANCEL_ORDER)}}>
            Cancel Order
          </button>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<HelpMainPage />, document.getElementById('root'));

export default withRouter(HelpMainPage);

