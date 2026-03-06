const adminAuth = (req, res, next) => {
    const token = "abc"
    const isAuthorized = token==='abc'
    if(isAuthorized){
      next();
    }else{
      res.status(403).send("Unauthorized");
    }  
  }

module.exports = adminAuth;