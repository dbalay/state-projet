import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImgSrc from './Components/imgSrc';
import FullName from './Components/fullName';
import Profession from './Components/Profession';
import Bio from './Components/bio';


class App extends Component{
constructor(){
  super()
  this.state={ imgSrc:'https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png',
    fullName:'Daad',
    bio:'test',
    Profession:'dev react',
    boolean:false,
    compteurApp:0,
    buttonState:'display show'
    }
  }


  componentDidMount(){
    setInterval( ()=> this.setState({compteurApp:this.state.compteurApp +1}),1000 ) 
  }


render(){
  console.log(this.state.boolean)
  return (
      <>
      {
        this.state.boolean?
        <div className='container text-center mt-3 box-state'>
          <ImgSrc pro={this.state.imgSrc} />  
          <FullName className='' pro={this.state.fullName}/>
          <Bio pro={this.state.bio}  />
          <Profession pro={this.state.Profession}/>
        </div>:null
      }
       <div className='container text-center mt-3'>
       <button className='btn btn-primary' onClick={()=>this.setState({boolean:!this.state.boolean})  } >{this.state.boolean?'display hide':this.state.buttonState}</button>
        <p>{this.state.compteurApp}</p>
       </div>
        
      </>
  );
}

}

export default App;