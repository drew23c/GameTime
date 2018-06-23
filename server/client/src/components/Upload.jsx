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
    handleTitle = (e) =>{
        this.setState({
            title: e.target.value
        })
    }
    handleDesc = (e) =>{
        this.setState({
            description: e.target.value
        })
    }
    handleURL = (e) =>{
        this.setState({
            selectedFile: e.target.files[0].name
        })
        console.log(e.target.files[0].name)
    }
    submit = (e) =>{
        e.preventDefault()
        const {title, description, selectedFile} = this.state
        this.setState({
            title:title,
            description: description,
            selectedFile: selectedFile
        })
        const data = new FormData();
        data.append('title', title);
        data.append('description', description);
        data.append('video', selectedFile, selectedFile.name);

    axios.post('http://localhost:3100/users/upload', data)
        .then(res =>{
            console.log('https://api.dailymotion.com/me/videos?url=' + res.data.url)
            this.setState({
                title:'',
                description:'',
                selectedFile: null
            })
        })
        .catch(err=>{
            console.log(err)
        })       
    }
    render(){
        const {title, description} = this.state
    return(
        <div className="Upload">
            <h3>Upload your video</h3>
            <form action="" method="POST" encType="multipart/form-data">
                <div className="form-group">
                    <input type="text" value={title} className="form-control" id="title" name="title" onChange={this.handleTitle} placeholder="Enter title"/>
                </div>
                <div className="form-group">
                    <textarea type="text" value={description} className="form-control" id="description" name="description" onChange={this.handleDesc} placeholder="Enter description"/>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" name="video" id="video" onChange={this.handleURL}/>
                </div>
                <button type="button" onClick={this.submit} className="btn btn-success">Upload</button>
            </form>
        </div>
    )
}
}
export default Upload;