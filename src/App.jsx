import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from 'store/store'

function scrollToTop() {
  // Scroll page to top only on navigating to new page
  if (this.state.location.action === 'PUSH') {
    window.scrollTo(0, 0)
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router onUpdate={scrollToTop} />
      </Provider>
    )
  }
}
export default App
