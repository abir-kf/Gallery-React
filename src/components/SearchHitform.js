import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class SearchHitform extends Component {

    constructor(props){
        super(props);
        this.state={
            keyWordValue:''
        }
    }  
    
    setKeyword=(event)=>{
        this.setState({
            keyWordValue:event.target.value
        })
    }

    doSearch=(event)=>{
        event.preventDefault(); // evite de recharger la page = initialiser les valeurs donc maktbqash m affichia valeur li zdna (part5:min 37)
        this.props.onSearch(this.state.keyWordValue);
    }

   render(){
       return( 
        <form onSubmit={this.doSearch}>
        <div className="row m-2 p-2">
            <div className="col">
                <input type="text" value={this.state.keyWordValue}
                onChange={this.setKeyword}
                className="form-control" placeholder="keyword"/>
            </div>
            <div className="col-auto">
                <button className="btn btn-success" type="submit">chercher</button>
            </div>    
        </div>
        </form>
       );
   }
}

export default SearchHitform;