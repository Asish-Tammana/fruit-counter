import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  incMango = () => {
    this.setState(prevMango => ({mango: prevMango.mango + 1}))
  }

  incBanana = () => {
    this.setState(prevBanana => ({banana: prevBanana.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruit-container">
          <h1>
            Bob ate <span className="fruit-count">{mango}</span> mangoes{' '}
            <span className="fruit-count">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div>
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <br />
              <button className="inc-btn" type="button" onClick={this.incMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <br />
              <button
                className="inc-btn"
                type="button"
                onClick={this.incBanana}
              >
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
