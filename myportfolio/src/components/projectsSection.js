import React from 'react';
import styled from 'styled-components';



const StyledProjectCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid rgb(210, 210, 210);
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color: #ccffe5;
width: 50%;
margin-left:25%;
align: center; 
`


const ProjectSection = () => {



    return(
        <div className='projectsSection'>
            <h3>Project Section</h3>
            <StyledProjectCard>
                <h4 >MediCabinet</h4>
                <a href={'https://medicabinett.netlify.app/'} > Deployed App</a>
                <p>
                This web app helps a user find a strain of medical marijuna to meet their symptoms.
                </p>

                <p>The app is fully operational if the CORS extension is turned on in your browser.
                </p> 
                <p>HTML, CSS, LESS, JavaScript, React, Redux, Node.js, Keras, Tenserflow, Flask</p>   

                <p>• Created the sign-up and login forms and utilized form validation to prevent errors from user input
                    </p>
                <p>• Implemented styling for the React components using styled components
                    </p>

                <p>• Made a get request using AXIOS and used a json web token to to authorize the user
                    </p>
                
            </StyledProjectCard>
            <StyledProjectCard>
                <h4>School In The Clouds</h4>
                <a href={'https://github.com/School-in-the-clouds-bw/SITC_FE' }>Github repo</a>
                <p>
                This was a multidisciplinary team project that allows an administrator to assign a tutor to a student for tutoring .
                </p>
                <p>
                HTML, CSS, LESS, JavaScript, React, Axios, Yup,Styled components, material UI, Node.js, Express, knex
                </p>
                <p>
                • Created the React app styled with both styled components and material UI
                </p>
                <p>
                • Made a single page app utilizing react-router for navigation and made the administrator dashboard with modals to allow the assigning, editing and deleting of tasks
                </p>
                <p>
                • Managed state with Redux and all CRUD operations with AXIOS interacting with a node.js backend and authenticated users with json web tokens
                </p>
            </StyledProjectCard>
            <StyledProjectCard>
                <h4>Co-make</h4>
                <a href={'https://github.com/Co-make-2/Back-end'} >Github repo</a>
                <p>
                This app allows a community/organization to match volunteers with projects that need to be completed.
                </p>
                <p>
                HTML, CSS, LESS, JavaScript, React, Axios, Yup,Styled components, material UI, Node.js, Express, knex, SQLite
                </p>
                <p>
                • created all listings database,schema,routes,models and tests
                </p>
                <p>
                • Implemented knex to query a database created using SQLite3
                </p>
                <p>
                • performed tests using jest and supertest
                </p>
            </StyledProjectCard>
            <StyledProjectCard></StyledProjectCard>
            <StyledProjectCard></StyledProjectCard>
        </div>
    )

}

export default ProjectSection;