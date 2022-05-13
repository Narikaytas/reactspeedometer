import {Component} from 'react'

class Speedometer extends Component{
    state ={
        count: 0
    }
    accelerate =() =>{
        if(this.state.count===200){ 
            return
        }
        this.setState(prevState => ({count:parseInt(prevState.count + 10)})) 
    }
    break =() =>{
        if(this.state.count===0){
            return
        }
        this.setState(prevState => ({count:parseInt(prevState.count - 10)}))
         
    }
    render(){
        const {count} =this.state
        return(
            <div className='speedoCard'>
                <h1>Speedometer</h1>
                <div className='speedoStyle'>
                    <img src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png' alt='speedometer'/>
                    <h2>Speed is {count} Kmph</h2>
                    <p>Min Speed Limit is 0 Kmph, Max Speed Limit is 200 Kmph</p>
                    <img src='https://lh3.googleusercontent.com/YyKvptAdFOohpD3ZG7JB0VfHlcoEd-82vSF_SCTaxca_CyqYPPB1jgDoKEgfNYiZ8t9a=s200' title='break' onClick={this.break} className='break' alt='break'/>
                    <img src='https://lh3.googleusercontent.com/YyKvptAdFOohpD3ZG7JB0VfHlcoEd-82vSF_SCTaxca_CyqYPPB1jgDoKEgfNYiZ8t9a=s200' title='accelerate' onClick={this.accelerate} className='accel' alt='accelerator'/>
                    

                </div>
            </div>
        )
    }
}
export default Speedometer