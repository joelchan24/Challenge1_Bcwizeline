import React,{Component} from 'react';

class PokeCard extends Component{

    render(){
        let data=this.props.datapokemon;
        return(

            <div className="container" >
                <h1>{data.name}</h1>    
                 <img 
                 src={data.sprites.front_default}
                 alt="new"
                 />   
                  <img 
                 src={data.sprites.front_shiny}
                 alt="new"
                 />        
                <div>
          
                 <a target='_blank' href={data.video} > {`Video of ${data.name} - Click Here`}</a> 
               
                </div>
            </div>


        )
    }





}


export default PokeCard;