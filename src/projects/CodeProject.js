import React from 'react';

const CodeProject = (props) => {
  return (
    <div id={props.id}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.imagePC !== '' ?
      <figure>
        <picture>
          <source media="(max-width: 819px)" srcSet={props.imageMobile}/>
          <img src={props.imagePC} alt={props.title} className="card__img"/>
        </picture>
      </figure>
      :
      <figure>
        <video className="card__img" autoPlay="autoPlay" muted loop >
          <source src={props.videoPC} type="video/mp4" autoPlay="autoPlay"></source>
        </video>
      </figure>
      }

     
        <h2 className="card__title">{props.title}</h2>
        <p className="card__text">{props.description}</p>
        <p className="card__text">I used: {props.tools}</p>
      
        </a>
    </div>
  )
}

export default CodeProject;