import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import HitItem from './HitItem';
import SearchHitform from './SearchHitform';

class Gallery extends Component {

    constructor(props){
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:9,
            totalPages:1,
            //currentkeyword:'paris'
            currentkeyword:'',
            pages:[],
            i:1
            //word:null
        }
    }

    componentDidMount(){//quand le component se charge on appel la fucntion gethits
       // this.getHits();
    }

    getHits(keyword){
        let url="https://pixabay.com/api/?key=16449759-50b988709d6f803fcf0dbcf42&q="+keyword
        +"&page="+this.state.currentPage+"&per_page="+this.state.pageSize;
        axios.get(url).then((resp)=>{
            console.log(resp);
            //let totalP=resp.data.totalHits/this.state.pageSize;
            let totalP=(resp.data.totalHits%this.state.pageSize===0)?Math.floor(resp.data.totalHits/this.state.pageSize):1+Math.floor(resp.data.totalHits/this.state.pageSize);
            console.log(totalP);
            this.setState({
                hits:resp.data.hits,
                totalPages:totalP,
                pages:new Array(totalP).fill(1),
                currentkeyword:keyword
                

            });
        }).catch((err=>{
            console.log(err);
            console.log(this.state.pages);

        }))
    }

   

    search=(keyword)=>{
       // event.preventDefault(); // evite de recharger la page = initialiser les valeurs donc maktbqash m affichia valeur li zdna (part5:min 37)
        this.getHits(keyword);
    }

    gotoPage=(page)=>{
        this.setState({
            currentPage:page
        }, ()=>{   //part 6 min :59 we called a function apres ma current age wlat page
        this.getHits(this.state.currentkeyword);
        });
       
        console.log(this.state.currentPage);
        console.log(page);
    }

    
    Increment=(a)=>{
         
        this.setState( {
          
          a:this.state.i+1

        });
    }

    render() {
        return (
            <div>
                
                <SearchHitform onSearch={this.search}/>


                    <div className="row">
                        {
                        this.state.hits.map((hit, index)=>
                       
                        <HitItem hit= { hit } word={this.state.currentkeyword} details={false} key={hit.id} index0={++index} />              
                        
                        )
                        }
                    </div>
                
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index)=>
                            <li key={index}>
                                <button className={this.state.currentPage===index+1?'btn btn-primary':'btn btn-link'} onClick={()=>this.gotoPage(index+1)}>{index+1}</button>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;