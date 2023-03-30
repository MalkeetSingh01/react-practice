import { Component } from "react";
import FunctionA from "./FunctionA";

class ClassA extends Component{

    constructor(props){
        super(props);
        this.state={
            date:this.props.date,
            date2:new Date(),
            date3:new Date(),
            inc:this.props.inc,
            counter:1,
        };
    }
// ** setState method, React merges the new state with the previous state, rather than overwriting it completely

    change(){
        this.setState({
            counter:3//does affect other states 
        })
    }
    componentDidMount(){
        console.log("mount");
        const tickId=setInterval(()=>{
            this.tick()
        },1000);
    }

    componentDidUpdate(){
        // console.log("UPDATED CLASS");   
    }

    componentWillUnmount(){
        console.log("unmount"); 
        clearInterval(this.tickId);
    }

    tick(){
        this.setState({
            date:this.props.date,
            date2:new Date(),
        })
    }

    plus(){
        // **this.props and this.state may be updated asynchronously, 
        // **you should not rely on their values for calculating the next state.
        // *!wrong
        // this.setState({
        //     counter:this.state.counter+this.state.inc
        // })
       //*? Correct
    //    previous state as the first argument, and the props at the time the update is applied as the second argument:
        this.setState((state, props) => ({
            counter: state.counter + props.inc
        }));


    }

    
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     })); callabck ensures we are always working with the upadted state of toggle 
//   }


    plus1(){
        // this.setState((state, props) => ({
        //     counter: state.counter + props.inc
        // }))
        // this.setState((state, props) => ({
        //     counter: state.counter + props.inc
        // }));//*!batchng of rerenders
        this.setState({
            counter:this.state.counter+this.state.inc
        })
        this.setState({
            counter:this.state.counter+this.state.inc
        })//*!here it needed to upadte by 4 2+2 twice but as objevt is directly passed to setState during second one the state renain the previos and not the updated one after 1st setState
    }
    divClick=(e)=>{
        e.preventDefault();
        e.stopPropagation();//if not when inner is clcked the outer will also be clicked (event bubbling)
        console.log("Div clicked");
    }
    linkClick=(e)=>{
        e.preventDefault();
        console.log("Preveting Default Dehaviour");
    }
    render(){
        return(
            <>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            <h2 style={{color:"red"}}>{this.state.date2.toLocaleTimeString()}</h2>
            <h2 style={{color:"green"}}>{this.state.date3.toLocaleTimeString()}</h2>
            <h1>{this.state.counter}</h1><button onClick={()=>this.plus()}>Plus</button>
            <h1>{this.state.counter}</h1><button onClick={()=>this.plus1()}>Plus--</button>

            <div style={{backgroundColor:"red",width:"100px"}} onClick={this.divClick}>OUTER
                <div style={{backgroundColor:"green",width:"80px"} } onClick={this.divClick}>INNETR</div>
            </div>
            <a href="https://www.google.com/" onClick={this.linkClick}>GOOGLE</a>

            <FunctionA date={this.state.date2}/>

            </>
        )
    }
}

// *! do not modify state directly this.state="red" No RE-RENDER
// **React may batch mutiple setState together(this.props and this.state may be updated asynchronously)
// *?

export default ClassA;