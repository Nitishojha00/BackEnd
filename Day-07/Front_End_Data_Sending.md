# frontend se kaisa data bhej rha  -> postman as a frontend kam krta hai use krke api testing krskta

const response = await fetch('link',{
    method:'POST',
    header:{
        'content-type':application/json'
    },
    body:JSON.Strongify({name:'John', age:29})
});

