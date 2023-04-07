import React from 'react';
import '../../styles/About.css'


const styles = {
    image: {
        height: 350,
        width: 700,
        alignSelf: 'center'
    }
}

function About(){
    return(
        <div className='Home'>
            <div className='about'>
                <h2>My name is Analise and I am an aspiring Full Stack Engineer</h2>
                <img src='/img/header_image.png'></img>
                <div className='prompt'>
                    <p>
                        I graduated from from the University of Connecticut with a bachelors in Mechanical Engineering. Since then I have explored several different 
                        fields of engineering, from systems, to software, to quality. I have the most experience in Quality Assurance and I am looking to expand my skill set and knowledge. 
                        Currently, I work for GameChanger by Dick's Sporting Goods as the Software Release Manager. I have experience in UI test automation, CI, and 
                        quality monitoring.
                    </p>
                </div>


            </div>

        </div>

    )
}

export default About;

{/* <div>
<h1>About Me!</h1>
<img src="/img/header_vision.PNG" alt="profile" style={styles.image}></img>
<p className='content is-italic mt-4'>
    My name is Analise and I am an aspiring Full Stack Engineer
</p>

<p className='content'>
    I graduated from from the University of Connecticut with a bachelors in Mechanical Engineering. Since then I have explored several different 
    fields of engineering, from systems, to software, to quality. I have the most experience in Quality Assurance and I am looking to expand my skill set and knowledge. 
    Currently, I work for GameChanger by Dick's Sporting Goods as the Software Release Manager. I have experience in UI test automation, CI, and 
    quality monitoring.
</p>
</div> */}