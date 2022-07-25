import React from 'react'

function coffeeEmos(minutes){
  let emos=minutes<30?Math.ceil(minutes/5):Math.ceil(minutes/10)
  let emosElements=""
  if(minutes<30){
      for(let i=0;i<emos;i++){
          emosElements+=("☕️")
      }
  }
  else{
      for(let i=0;i<emos;i++){
          emosElements+="🍱"        }
  }
  return emosElements
}

function Article(props){
  return(
      <article>
          <h3>{props.title}</h3>
          <div style={{display:"flex"}}>
              <small>{`${props.date?props.date:"January 1, 1970"}`}</small>
              <small>{`. ${coffeeEmos(props.minutes)} ${props.minutes} min read`}</small>
          </div>
          
          <p>{props.preview}</p>
      </article>
  )
}

export default Article