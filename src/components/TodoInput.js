import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'

export default class TodoInput extends Component {
    render() {
        return (
            <div className='card card-body my-3'>
                <form>
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fa fa-book"></i>
                        </div>
                        <input type='text' className='form-control' placeholder ='Add a todo item'/>
                    </div>
                    <button type='submit' className='btn btn-block btn-primary mt-3'>
                        Add Item
                    </button>
                </form>
            </div>
        )
    }
}
