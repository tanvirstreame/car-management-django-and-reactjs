import {withRouter} from 'next/router'
// import {withRoute} from 

const Post=withRouter((props)=>{
  return <div>
    <p>{props.router.query.id}</p>
  </div>
})

export default Post;
