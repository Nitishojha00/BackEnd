function middleware(req,res,next)
{
    let pass = "abc";
    const access = pass=="abc"?1:0;
    if(access)
      next();
    else
        re.status(401).send('Unathorized');
}

module.exports = middleware;