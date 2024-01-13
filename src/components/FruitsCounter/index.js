// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {c1: 0, c2: 0}

  mangoinc = () => {
    this.setState(prevState => ({
      c1: prevState.c1 + 1,
    }))
  }

  bananainc = () => {
    this.setState(prevState => ({c2: prevState.c2 + 1}))
  }

  render() {
    const {c1, c2} = this.state
    return (
      <div className="main">
        <div className="main2">
          <h1 className="hh">
            Bob ate <span className="man">{c1}</span> mangoes{' '}
            <span className="ban">{c2}</span> bananas
          </h1>
          <div className="ind">
            <div className="btns">
              <img
                className="im1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="b1" onClick={this.mangoinc}>
                Eat Mango
              </button>
            </div>
            <div className="btns">
              <img
                className="im2"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.bananainc} className="b2">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
