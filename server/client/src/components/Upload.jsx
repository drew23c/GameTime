import React, {Component} from 'react';
import './Styles/Upload.css';
import axios from 'axios';

class Upload extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            description: '',
            selectedFile: null
        }
    }
    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const {title, description, selectedFile} = this.state
        const data = new FormData();
        data.append('title', title);
        data.append('description', description);
        data.append('video', selectedFile);

    axios.post('http://localhost:3100/users/upload', data)
        .then(res =>{
            this.setState({
            })
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })       
    }
    render(){
    return(
        <div className="Upload">
            <h3>Upload your video</h3>
            <form action="" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="title" name="title" onInput={this.handleInput} placeholder="Enter title"/>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" id="description" name="description" onInput={this.handleInput} placeholder="Enter description"/>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" name="video" id="video" onInput={this.handleInput}/>
                </div>
                <button type="button" className="btn btn-success">Upload</button>
            </form>
        </div>
    )
}
}
export default Upload;