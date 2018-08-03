var db = require('./index');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

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
    db.any('SELECT name FROM users WHERE id = $1', [id]).then(data =>{
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
    db.any('SELECT * FROM videos WHERE userId = $1', [userId]).then(data =>{
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
    db.any('SELECT * FROM likes WHERE userId = $1', [userId]).then(data =>{
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
    db.any('SELECT * FROM watchlater WHERE userId = $1', [userId]).then(data =>{
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
    let title = req.body.title;
    let description = req.body.description;
    let selectedFile = upload.single('selectedFile');

    db.any('INSERT INTO videos (title, description, selectedFile) VALUES (${title}, ${description}, ${selectedFile})', {title: title, description: description, selectedFile: selectedFile})
    .then(() =>{
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

// postUserVid = (req, res, next) =>{
//     let userId = req.body.userId;
//     let title = req.body.title;
//     let description = req.body.description;
//     let selectedFile = req.body.selectedFile;
//     let id = req.body.id;

//     db.any('SELECT upload_url FROM users WHERE id = ${id}', {id: id})
//     .then(data =>{
//         axios.get(data + '?url=' + selectedFile)
//         console.log(data)
//         .then(url =>{
//           res.status(200).json({
//               status: 'success',
//               data: url,
//               message: 'user\'s video added'
//           })  
//         })
//         .catch(err =>{
//             res.status(500).json({
//                 status: 'failed',
//                 message:err
//             })
//         })
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

module.exports = {
    getUsers, 
    getOneUser,
    getVideos,
    getUserVideos,
    getUserLikes,
    getUserWatch,
    postVideo,
    // postUserVid
}