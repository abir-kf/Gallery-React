import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


class HitItem extends Component {

    constructor(props){
        super(props);
        this.state={
            id:null,
            tab:null,
            etat:true
        }
       
    }   
    
    
 

   render(){
       return(

        <div key={this.props.hit.id} className={this.props.details===false?"col-md-4":"md-2"}>
        <div className="card">
            <div className="card-header">
                {this.props.details===true?this.props.hit.tags:''} 
                 {this.props.details===false?this.props.hit.webformatWidth:this.props.hit.imageWidth}
                  X {this.props.details===false?this.props.hit.webformatHeight:this.props.hit.imageHeight}
            </div>
            <div className="card-body">
                {
                (this.props.details===false)?
                <img className="card-img" height={200} src={this.props.hit.webformatURL} alt="hit"/> :
                <img src={this.props.hit.largeImageURL} alt="hit"/> 
                }
            </div>

            <div className="card-body">
            {
                (this.props.details===false)?
                <div className="m-2">
                <Link to={'/HitDetails/'+this.props.hit.id+'/'+this.props.word+'/'+this.props.index0} className="btn btn-success">More Details..:{this.props.index0}:{this.props.word}</Link>
                </div>
                :
                <div>
                    <div className="row p-2">
                        <div className="col-auto">
                            <img src={this.props.hit.userImageURL} className="img-thumbnail"  alt=""/>
                        </div>
                        <div>
                            <ul className="nav nav-pills">
                                <li className="list-group-item">Views:<strong>{this.props.hit.views}</strong></li>
                                <li className="list-group-item">Comments:<strong>{this.props.hit.comments}</strong></li>
                                <li className="list-group-item">Downloads:<strong>{this.props.hit.downloads}</strong></li>
                                <li className="list-group-item">Likes:<strong>{this.props.hit.likes}</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                    <Link className="btn btn-primary" to={"/gallery"}>Return</Link>
               
                     {(this.props.etat===true)?
                    
                    <Link to={'/NextImage/'+this.props.id+'/'+this.props.word+'/'+this.props.index0}  className="btn btn-success">Suivant</Link>:
                    <Link to={'/HitDetails/'+this.props.id+'/'+this.props.word+'/'+this.props.index0}  className="btn btn-success">Suivant</Link>
                     }

                    <div>
                   
             </div>
                    
                    </div>
                </div>
            }
            </div>
            
        </div>
    </div>


       );
   }
}

export default HitItem;