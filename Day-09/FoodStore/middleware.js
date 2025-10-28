export default function middleware(req,res,next)
{
    const token = "ABC";
    const access = (token==="ABC")?1:0;

     if(access)
     {
        next();
     }
     else
     {
            res.status(403).send('No Permission');
     }
}
