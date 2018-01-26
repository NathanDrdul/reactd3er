import React, {Component} from 'react';

const numDataPoints = 10;

const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random()*(max+1 - min)) }

const randomDataSet = () => {
    return Array.apply(null, {length: numDataPoints}).map(() => [generateRandomInteger(-5,5)]);
  }



class Randomgen extends Component{


    
    constructor(props){
        super(props);
        this.state = {data: randomDataSet(),
                      dataSum: []
        }
        
    }
    flatten(arr) {
        return Array.prototype.concat(...arr);
    }

    sumStateData() {
        const tempArray = this.state.data.map((i)=> {return i});
        const tempArray2 = this.flatten(tempArray);
        //console.log( tempArray2);

        const sumArray = tempArray2.reduce((a,b)=>{
            return a+b;
        },0);
        const result = tempArray2.reduce(function(r, a) {
            r.push((r.length && r[r.length - 1] || 0) + a);
            return r;
          }, []);

        //console.log(result);
        this.setState({sumData:result});
    }
  
    randomizeData() {
        this.setState({ data: randomDataSet() });
        
      }
    
   
   

    render(){
        return(
            <div>
                
                <button className="btn randomize" onClick={() => this.sumStateData()}>Set State sum</button>
                <p>{this.state.sumData}</p>
                
                <button className="btn randomize" onClick={() => this.randomizeData()}>Randomize state array </button>
                <p>{this.state.data.length}</p>

             <p> {this.state.data.map((i)=>{
                        return <ul>{i}</ul>;
                })} </p> 

               
                
            </div>
        );
    }

}

export default Randomgen;