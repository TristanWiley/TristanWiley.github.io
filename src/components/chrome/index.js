import React from 'react'

import ChromeHome from '../../styles/images/chrome-home.png'
import '../../styles/chrome/index.css'

class Chrome extends React.Component {
  constructor() {
    super()

    this.state = {
      searchQuery: 'google.com',
      iframeUrl: 'https://www.google.com/webhp?igu=1'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { searchQuery } = this.state

    console.log(searchQuery)

    if (searchQuery.includes("google.com")) {
      this.setState({ iframeUrl: 'https://www.google.com/webhp?igu=1'})
    }

    if (!searchQuery.startsWith("https://") && !searchQuery.startsWith("http://")) {
      const testUrl = new URL(`https://${searchQuery}`)
      if (testUrl.hostname.includes('.')) {
        this.setState({ iframeUrl: testUrl.href })
      } else {
        this.setState({ iframeUrl: `https://www.google.com/webhp?igu=1&q=${searchQuery}` })
      }
    }
  }
  render() {
    const { searchQuery, iframeUrl } = this.state

    return (
      <div className="chrome app page">
        <div className="chrome-navbar">
          <img src={ChromeHome} />
          <form className="search_form" onSubmit={this.handleSubmit}>
            <input
              className="search_box"
              value={searchQuery}
              onChange={(e) => this.setState({
                searchQuery: e.currentTarget.value
              })}

            />
          </form>
        </div>
        <iframe src={iframeUrl} target="_parent" />
      </div>
    )
  }
}

export default Chrome