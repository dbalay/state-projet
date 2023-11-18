import React, {Component} from 'react'

class ImgSrc extends Component    {
    render(){
             return (
                    <>
                        <img  src={this.props.pro} width="200" alt=""/>
                    </>
             )
        }
}

export default ImgSrc