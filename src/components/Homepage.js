
import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export class Homepage extends Component{
    constructor(props){
        super(props);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleEdit(item)
    {
        console.log(item);
    }
    handleDelete(item)
    {
         var answer=window.confirm("Are you sure you want to Delete?");
         if(answer==true)
         {
           item.id='';
           item.text='';
           console.log(item);
         }

    }

    render(){
        
        return(
            <div text-align='center'>
            <ul>
                {this.props.items.map(item=>(
                    <li  style={{margin: "10px 0"}} key={item.id}>{item.text} &nbsp; &nbsp;<button onClick={() => this.handleEdit(item)}>Edit</button> &nbsp; &nbsp;<button onClick={()=> this.handleDelete(item)}>Delete</button> </li>
                
                ))}
            </ul>
            </div>
        );
  
    }
}
export default Homepage;




