import React from "react";
import './App.css';
import './style.css'
import Product from './Product';
import productData from "./vschoolProducts";

/*
22. Mapping Components Practice

Given a list of products (as an array of objects, as seen in productData.js)
render a <Product/> components (which you'll also need to create) for each
product in the list

Make sure to user array's `.map()` to create these components, and don't forget
to pass a `key` prop to it to avoid the warning.
 */

// state practise.
// Challenge:
// Given an incomplete class-based component without a constructor
// add a constructor and initialize state to fix the broken component.

// https://reactjs.org/docs/events.html#supported-events

// function handleClick() {
//     console.log("I was clicked");
// }

// function App() {
//
//     //function (product) {
//     //        return <Product key={product.id} product={product}/>
//     // const productComponents  =  productData.map(
//     //     item => <Product key={item.id} product={item}/>
//     // );
//     return (
//         <div>
//             {/*<h1>Code goes here {props.whatever}</h1>*/}
//             {/*{productComponents}*/}
//             <img onMouseOver={() =>console.log("Hovered! Hover Over the image")}
//                  onDrag={()=> console.log("onDrag triggered")}
//                  onPointerMove={()=> console.log("Pointer Move")}
//                  src="http://www.fillmurray.com/200/100" alt=""/>
//             <br/>
//             <br/>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }


class App extends React.Component{

// changing the state // 32
    // task 1 : button for double and another for half.
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            answer: "Yes",
            name:"Sally",
            age:13
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);

    }

    //yourMethodHere() {}

    handleClick (){
        console.warn("Warn");
        alert("Alert");

        //console.log(this.state.count);
        //let var1 = this.state.count;
        console.log("ddd");
        this.setState(prevState =>{
           return({
               count: prevState.count + 1
           })
        });
        //this.state.count = this.state.count++
    }
    handleClick2 (){
        //console.log(this.state.count);
        //let var1 = this.state.count;
        console.log("ddd");
        this.setState(prevState =>{
            return({
                count: prevState.count * 2
            })
        });
        //this.state.count = this.state.count++
    }
    handleClick3(){

        //console.log(this.state.count);
        //let var1 = this.state.count;
        console.log("ddd");
        this.setState(prevState =>{
            return({
                count: prevState.count / 2
            })
        });
        //this.state.count = this.state.count++
    }

    render() {
        //const date =new Date();
        //const style = this.yourMethodHere();
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} year old </h1>
                <h1>{this.state.count}</h1>
                {/*<h1>Code goes here {this.props.whatever}</h1>*/}
                <h1>Code goes here {this.state.answer}</h1>
                <h2>{this.props.newProp}</h2>
                {/*<ChildComponent answer={this.state.answer}/>*/}
                <button onClick={this.handleClick}>Change (increase by one) !</button>
                <button onClick={this.handleClick2}>Change (increase by Two) !</button>
                <button onClick={this.handleClick3}>Change (increase by Three) !</button>

                {/*<ChildComponent count={this.state.count}/>*/}
            </div>
        );
    }
}

export default App;
