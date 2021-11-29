import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HitItem from './HitItem';

class NextImage extends Component {

    constructor(props){
        super(props);
        this.state={
            hit:null,
            id_next:null,
            word0:null,
            index01:null
        }
    } 

 
    getHits(id,word, index0){
        let url="https://pixabay.com/api/?key=16449759-50b988709d6f803fcf0dbcf42&q="+word+"&id="+id;
        axios.get(url).then((resp)=>{
        //console.log("fct1");
            this.setState({
                hit:resp.data.hits[0]
            });
            
        }).catch((err=>{
            console.log(err);

        }))
       // this.getSecondHits(word, index0);
       let url1="https://pixabay.com/api/?key=16449759-50b988709d6f803fcf0dbcf42&q="+word;
       axios.get(url1).then((resp)=>{
          // console.log("fct2")
        //console.log(resp.data.hits[index0-1].id);
        //console.log(index0-1);
           this.setState({
               id_next:resp.data.hits[index0].id
           });
           
       }).catch((err=>{
           console.log(err);

       }))

    }

  /*  getSecondHits(word, index0){
        let url="https://pixabay.com/api/?key=16449759-50b988709d6f803fcf0dbcf42&q="+word;
        axios.get(url).then((resp)=>{
            console.log("fct2")
         //console.log(resp.data.hits[index0-1].id);
         //console.log(index0-1);
            this.setState({
                id_next:resp.data.hits[index0-1].id
            });
            
        }).catch((err=>{
            console.log(err);

        }))

        
    }*/

    componentDidMount(){// meme temps que la page se charge i guess

        //console.log(this.props.match.params.index0);
        //console.log(this.props.match.params.word);
        //console.log(this.props.match.params.details);
        console.log("apres excution des 2 fcts");

        this.getHits(this.props.match.params.id, this.props.match.params.word, this.props.match.params.index0); // get value saisie f url (part8: min15)
       // this.getSecondHits(this.props.match.params.word, this.props.match.params.index0);

   
    }

    render(){

        

    

                if(this.state.hit!=null){
                    console.log(this.props.match.params.index0 +" next image");

             //console.log("cdt true");
                return(
                    
                    <HitItem hit= {this.state.hit}  id= {this.state.id_next} word={this.props.match.params.word} index0={++this.props.match.params.index0} etat={false} details={true}  />      
                                            
                );}
                else {
                //console.log("abiir4");
                    return <div>abi</div>           
                }
            
    }
}


export default NextImage;
