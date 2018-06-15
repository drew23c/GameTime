var db = require('./index');

getUsers = (req, res, next) =>{
    db.any('SELECT * FROM users').then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'retrieved users'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

getOneUser = (req, res, next) =>{
    let id = req.params.id;
    db.any('SELECT name FROM users WHERE id = ${id}', {id: id}).then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'retrieved one user'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

getVideos = (req, res, next) =>{
    console.log('hi')
    db.any('SELECT * FROM videos').then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'retrieved users'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

getUserVideos = (req, res, next) =>{
    let userId = req.params.userId;
    db.any('SELECT * FROM videos WHERE userId = ${userId}', {userId: userId}).then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'videos retrieved for user'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

getUserLikes = (req, res, next) =>{
    let userId = req.params.userId;
    db.any('SELECT * FROM likes WHERE userId = ${userId}', {userId: userId}).then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'likes retrieved for user'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

getUserWatch = (req, res, next) =>{
    let userId = req.params.userId;
    db.any('SELECT * FROM watchlater WHERE userId = ${userId}', {userId: userId}).then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'watch later retrieved for user'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

postVideo = (req, res, next) =>{ 
    let userId = req.body.userId;
    let title = req.body.title;
    let description = req.body.description;
    let selectedFile = req.body.selectedFile;
    db.any('INSERT INTO videos (userId, title, description, selectedFile) VALUES (${userId}, ${title}, ${description}, ${selectedFile})', {userId: userId, title: title, description: description, selectedFile: selectedFile})
    .then(data =>{
        res.status(200).json({
            status:'success',
            message:'video uploaded'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

module.exports = {
    getUsers, 
    getOneUser,
    getVideos,
    getUserVideos,
    getUserLikes,
    getUserWatch,
    postVideo
}