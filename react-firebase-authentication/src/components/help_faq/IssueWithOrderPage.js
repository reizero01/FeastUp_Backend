import React from 'react'
import ReactDOM from 'react-dom'

import { Link,
  withRouter,
} from 'react-router-dom';


class IssueWithOrderPage extends React.Component {
  render() {
    return (
      <div>
        <div>Issue with Order Page</div>
    </div>
    )
  }
}

ReactDOM.render(<IssueWithOrderPage />, document.getElementById('root'));

export default withRouter(IssueWithOrderPage);