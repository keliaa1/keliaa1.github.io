import React from 'react';
import Spline from '@splinetool/react-spline';

const Projects = () => {
  return (
    <section id="projects" style={{ margin: '150px 0', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <main style={{ width: '100%', height: '100%', borderRadius: '40px', overflow: 'hidden', background: '#000' }}>
        <Spline
          scene="https://prod.spline.design/lAeWCd2hfmiWpUBI/scene.splinecode" 
        />
      </main>
    </section>
  );
};

export default Projects;

