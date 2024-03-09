import React from 'react';
import CodeProject from './CodeProject'
import CODEPROJECTS from '../../services/CodeProjectsJSON';
import { useState, useEffect } from 'react';




const CodeProjects = () => {
    const portfolio = CODEPROJECTS;
  
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
      setProjects(portfolio);
    }, []);

    useEffect(() => {
      setProjects([]);
      const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
      setProjects(filtered);
    }, [filter]);


        return (
            
            <>
            <header className="header">
                <h2 className="title" title="María Mateo">María Mateo</h2>
                <h3 className="title" title="María Mateo">Portfolio</h3>
            </header>
            <div className="button-container">
                    <button className={filter === 'all' ? 'button button-all active' : 'button button-all'} onClick={() => setFilter('all')}>
                    All projects
                    </button>
                    <button className={filter === 'dataviz' ? 'button button-dataviz active' : 'button button-dataviz'} onClick={() => setFilter('dataviz')}>
                    DataViz
                    </button>
                    <button className={filter === 'layout' ? 'button button-layout active' : 'button button-layout'} onClick={() => setFilter('layout')}>
                    Layout
                    </button>
                    <button className={filter === 'infography' ? 'button button-infography active' : 'button button-infography'} onClick={() => setFilter('infography')}>
                    Infography animation
                    </button>
                    <button className={filter === '3D' ? 'button button-3D active' : 'button button-3D'} onClick={() => setFilter('3D')}>
                    3D
                    </button>
                    <button className={filter === 'audio' ? 'button button-audio active' : 'button button-audio'} onClick={() => setFilter('audio')}>
                    Audio
                    </button>
            </div>

            <ul className="codeproject__list-container">

            {
            projects.map(projectObject => projectObject.filtered === true ? (
                <li className={projectObject.classes}
                    key={projectObject.id}>
                    <CodeProject
                            classes={projectObject.classes}
                            imageMobile={projectObject.imageMobile}
                            imagePC={projectObject.imagePC}
                            videoMobile={projectObject.videoMobile}
                            videoPC={projectObject.videoPC}
                            title={projectObject.title}
                            description={projectObject.details.description}
                            link={projectObject.details.link}
                            tools={projectObject.details.tools}
                        />
                </li>
            ): '')}

            
            
            </ul>

            </>
        )}

    
export default CodeProjects;

