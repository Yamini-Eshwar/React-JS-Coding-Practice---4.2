import {Component} from 'react'
import './index.css'

class Speedometer extends Component{
    state = {count:0}
    onIncrement = () =>{
          this.setState(prevState =>
             prevState.count<200? {count: prevState.count + 10} : {count: 200}
          )
    }
    onDecrement = () =>{
        this.setState(prevState =>
            prevState.count>0? {count: prevState.count - 10} : {count: 0}
          )
    }
    render(){
        const {count} = this.state;
        return(
            <div className='container'>
               <h1>SPEEDOMETER</h1>
               <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"/>
               <p className='para1'>Speed is <span>{count}</span>mph</p>
               <p className='para2'>Minimum Limit is 0mph, Max Limit is 200mph</p>
               <div className='btn-container'>
                  <button className='btn1' onClick={this.onIncrement}>Accelerate</button>
                  <button className='btn2' onClick={this.onDecrement}>Apply Brake</button>
               </div>
            </div>
        )
    }
}

export default Speedometer