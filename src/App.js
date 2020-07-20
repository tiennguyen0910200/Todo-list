import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';


// Bài 8 
// class App extends Component {
//   constructor(){
//     super();
//     this.todoItems = [
//       "Mua bimbim",
//       "Di da Banh",
//       "Di do xang"
//     ];
//   }
//   render(){
//     return (
//       <div className="App">
//         {
//           this.todoItems.map((item, index)=> <TodoItem key={index} title={item} />)
//         }
//       </div>
//     );
//   }

// }


//bài 10
// class App extends Component {
//   constructor() {
//     super();
//     this.todoItems = [
//       { title: "Mua bimbim", isComplete: true },
//       { title: "Di da banh", isComplete: true },
//       { title: "Di do xang" }
//     ];
//   }
//   render() {

//     return <div className="App">
//       {
//         this.todoItems.length > 0 && this.todoItems.map((item, index) => (
//           <TodoItem key={index} item={item} />
//         ))
//       }
//       {this.todoItems.length === 0 && 'Nothing here'}
//     </div>;

//   }

// }


// bai 13
class App extends Component {
  constructor() {
    super();
    this.state = [
      { title: "Mua bimbim", isComplete: true },
      { title: "Di da banh", isComplete: true },
      { title: "Di do xang" }
    ];
  }
  onItemClicked() {

  }
  render() {
    if (this.todoItems.length) {
      const {todoItems} = this.state;
      return <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClicked} />
          ))
        }
        {this.todoItems.length === 0 && 'Nothing here'}
      </div>;
    }
  }

}

export default App;
