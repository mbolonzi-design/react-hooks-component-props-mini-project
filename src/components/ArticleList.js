import React from 'react'
import Article from './Article'

function ArticleList(props){
  console.log(props.posts)
  return(
      <main>
        {props.posts.map(post=>{
        return <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id}/>
          }) }    
      </main>
  )
}
export default ArticleList