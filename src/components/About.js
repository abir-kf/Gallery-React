import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class About extends Component {

    constructor(props){
        super(props);
        this.state={
            skillValue:"",
            title: "Personal informations",
            contact:{full_name:"KFIFAT Abir", profile:'images/v.jpg', email:"kfifatabir@gmail.com"},
            skills:[
                {id:1, skill:"UI Desingr"},
                {id:2, skill:"Dancer"},
                {id:3, skill:"Producer"},
        ]
        }
    }

    setSkill=(event)=>{
        this.setState({
            skillValue:event.target.value  //skillvalue prend la valeur de l input dont l event =arg entré
        })
    }

    addSkill=(event)=>{

        event.preventDefault(); // evite de recharger la page = initialiser les valeurs donc maktbqash m affichia valeur li zdna (part5:min 37)
        let skill={
            id:[...this.state.skills].pop().id+1, //... copie le tableau sans ecraser l'ancien tab du state (part 5 : min 35)/ pop prend la derniere valeur du tableau
            skill:this.state.skillValue
        }
        this.setState({
            skills:[...this.state.skills,skill]//...copie tab skills f skills et ajout skill a la fin
        })
    }

    deleteSkill=(skill)=>{

        let index=this.state.skills.indexOf(skill); 
        let listSkills=[...this.state.skills];
        listSkills.splice(index, 1); //delete
        this.setState({
            skills:listSkills
        });
    }
    
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <strong><label>{this.state.title}</label></strong>
                    </div>
                <div className="row p-2">
                    <div className="col col-auto">
                        <img alt="alae" width={100} src={this.state.contact.profile} />
                    </div>

                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.contact.full_name}</li>
                            <li className="list-group-item">{this.state.contact.email}</li>
                        </ul>
                    </div>
                </div>
            </div>  

             <div>
                <div className="card m-2">
                    <div className="card-header"> Skills : {this.state.skillValue} </div>
                    <div className="card-body">
                        <form onSubmit={this.addSkill}>
                            <div className="row mb-2"> 
                            <div className="col">
                                <input type="text" name="skill" placeholder="add a new skill" 
                                 value={this.state.skillValue} onChange={this.setSkill} className="p-1"/>
                            </div>
                            <div className="col col-auto"> 
                                <button className="btn btn-primary" type="submit">Add</button>
                            </div>
                            </div>
                            </form>
                        <table className="table">
                          <thead>
                          <tr>
                                <th> ID </th>
                                <th>skill</th>
                                <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                this.state.skills.map((s, index)=>
                                <tr key={s.id}>
                                    <td>{s.id}</td>
                                    <td>{s.skill}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.deleteSkill(s)}>Delete</button>

                                    </td>
                                </tr>
                                )
                            }
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default About;