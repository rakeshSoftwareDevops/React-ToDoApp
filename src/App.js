import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import  './components/Homepage.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {items:[],text:'',editName:'',editNo:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleEditSubmit=this.handleEditSubmit.bind(this);
  }
  handleChange(e){
    this.setState({text:e.target.value});
  }
  handleSubmit(e)
  {
    e.preventDefault();
    if(this.state.text.length===0 || this.state.editName.length !==0)
    {
      return;
    }
    console.log( this.state.editName.length);
    const newItem={
      text:this.state.text,
      id:Date.now()
    };
    this.setState(state => ({
      items:  [...this.state.items, newItem],
      text:''
    }));

  }
  handleEdit(item)
  {
      var array=[...this.state.items];
      var index=array.indexOf(item);
      if(index!==-1)
      {
        this.setState(state =>({
          text:item.text,
          editName:item
        }));
      }
    
  }
  handleDelete(item)
  {
       var answer=window.confirm("Are you sure you want to Delete?");
    
       if(answer==true)
       {
         var array=[...this.state.items];
         var index=array.indexOf(item);
         if(index!==-1)
         {
           array.splice(index,1);
           this.setState({items:array});
         }
       }

  }
  handleEditSubmit()
  {
     var array=[...this.state.items];        


     if(typeof this.state.editName!=='undefined' && this.state.editName!=='')
     {
        var index=array.indexOf(this.state.editName);
      

        if(index!==-1)
        {
          for(let i=0;i<array.length;i++)
          {
             if(array[i]===this.state.editName)
             {
               array[i].text=this.state.text;
               this.setState(state=>({

                items:array,
                editName:'',
                editNo:i
                

               }));

             }
          }
          
        }
        console.log(this.state.items);

     }


     
  }
  ToDoList() {
    return (
      <div text-align='center'>
            <ul>
                {this.state.items.map(item=>(
                    <li  style={{margin: "10px 0"}} key={item.id}>{item.text} &nbsp; &nbsp;<button onClick={() => this.handleEdit(item)}>Edit</button> &nbsp; &nbsp;<button onClick={()=> this.handleDelete(item)}>Delete</button> </li>
                
                ))}
            </ul>
      </div>
    );
  }

  render(){
    return(
      <div>  
        <h1>ToDo App</h1>
        <br/>
        {this.ToDoList(this.state.items)}
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">what needs to be done? </label> 
        <br/>
        <br/>
        <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
        <br/>
        <br/>
        <button >
          Add#{this.state.items.length+1}
        </button>
        &nbsp;
        &nbsp;
        </form>
        <br/>
        <br/>
        <button onClick={()=> this.handleEditSubmit()}>
          Edit
        </button>
      
      </div>
    );
  }
}

export default App;
