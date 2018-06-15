var passport = require('passport');
var db = require('./db/index');
var DailymotionStrategy = require('passport-dailymotion').Strategy;
var DM = require('./secret/dmAPI');
var axios = require('axios');

passport.serializeUser((user, done)=>{
    // done(null, profile.id)
    done(null, user.id)
});

passport.deserializeUser((id, done)=>{
    // Users.findById(id, done);
    db.any('SELECT * FROM users WHERE api_id=$1', [id])
    .then(user =>{
        done(null, user)
    })
    .catch(err =>{
        console.log(err)
    })
})

passport.use(new DailymotionStrategy({
    clientID: DM.keys.DM_API,
    clientSecret: DM.keys.DM_SECRET,
    callbackURL: DM.keys.DM_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
      // Query the database to find user record associated with this
      // dailymotion profile, then pass that object to done callback
      console.log("INFO: ", accessToken, refreshToken, profile)

    axios.get('https://api.dailymotion.com/file/upload?access_token=' + accessToken)
    .then(res =>{
        db.one('INSERT INTO users (name, api_id, upload_url) VALUES ($1, $2, $3)', [profile.displayName, profile.id, res.data.upload_url])
        .then(profile =>{
            done(null, profile)
        })
        .catch(() =>{
            db.any('SELECT * FROM users WHERE api_id=$1',[profile.id])
        .then(id =>{
                return done(null, profile);  
        })  
        .catch(err=>{   
          console.log(err)
        });
        })
    }
    )
    //validate the profile, if not create a profile in the database
    }
  ));

  module.exports = {
      passport: passport     
  };