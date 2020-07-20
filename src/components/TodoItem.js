import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
class TodoItem extends Component {
    // render() {
    //     const {item} = this.props;
    //     let className = 'TodoItem';
    //     if(item.isComplete){
    //         className +=' TodoItem-complete';
    //     }
    //     return ( 
    //         <div className = {className} >
    //         <p >  {this.props.item.title} </p> 
    //         </div>
    //     )
    // }

    //bài 13
 
    render() {
        const { item, onClick } = this.props;
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete'
        }
        return (
            <div onClick={onClick} className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })}>
                <h5> {this.props.item.title} </h5>
            </div>
        );
    }

}

export default TodoItem;