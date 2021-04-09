import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledProjectCard = styled.div`
display: flex;
flex-direction: row;
border: 1px solid rgb(210, 210, 210);
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin-bottom: 8px;
padding-bottom: 12px;
background-color: #ccffe5;
width: 27%; 
positions: relative;
flex-wrap: wrap;
position: relative;
justify-content: space-between;
`
 const StyledVerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  padding: 1px;
  align: center;
`;

const ProjectSection = () => {



    return(
        <div className='projectsSection'>
            <h3>Project Section</h3>
            <StyledComponent>
            <StyledProjectCard>
                <StyledVerticalBox>
                <h4 >MediCabinet</h4>
                <a href={'https://medicabinett.netlify.app/'} > Deployed App</a>
                <a href={'https://github.com/Build-Week-Medicine-Cabinet/front-end'} > Github Repo</a>
                <p>
                This web app helps a user find a strain of medical marijuna to meet their symptoms.
                </p>
                <p>
                    The app is fully operational if the CORS extension is turned on in your browser.
                </p> 
                <p>
                    HTML, CSS, LESS, JavaScript, React, Redux, Node.js, Keras, Tenserflow, Flask
                </p>   
                <p>
                    • Created the sign-up and login forms and utilized form validation to prevent errors from user input
                </p>
                <p>
                    • Implemented styling for the React components using styled components
                </p>
                <p>
                    • Made a get request using AXIOS and used a json web token to to authorize the user
                </p>  
                </StyledVerticalBox>
            </StyledProjectCard>

            <StyledProjectCard>
                <StyledVerticalBox>
                <h4>School In The Clouds</h4>
                <a href={'https://school-in-the-clouds-char.netlify.app/signUp' }>Deployed React Site</a>
                <a href={'https://github.com/School-in-the-clouds-bw/SITC_FE' }>Github repo</a>
                <p>
                This was a multidisciplinary team project that allows an administrator to assign a tutor to a student for tutoring 
                </p>
                <p>
                    The React app requires a user to sign up and then login.
                </p>
                <p>
                HTML, CSS, LESS, JavaScript, React, Axios, Yup,Styled components, material UI, Node.js, Express, Knex
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
                </StyledVerticalBox>
            </StyledProjectCard>


            <StyledProjectCard>
                <StyledVerticalBox>
                <h4>Co-make</h4>
                <a href={'https://github.com/Co-make-2/Back-end'} >Github repo</a>
                <p>
                This app allows a community/organization to match volunteers with projects that need to be completed.
                </p>
                <p>
                HTML, CSS, LESS, JavaScript, React, Axios, Yup,Styled components, material UI, Node.js, Express, Knex, SQLite3
                </p>
                <p>
                • Made the backend using Node.js, Express
                </p>
                <p>
                • Created all listings database,schema,routes,models and tests
                </p>
                <p>
                • Implemented Knex to query a database created using SQLite3
                </p>
                <p>
                • Performed tests using jest and supertest
                </p>
                <p>
                • Tested routes with postman to ensure posted and recieved data
                </p>
                </StyledVerticalBox>
            </StyledProjectCard>

            <StyledProjectCard>
                <StyledVerticalBox>
                <h4>Todo App</h4>
                <a href={'https://fervent-noyce-ff07a4.netlify.app/'} >Deployed App</a>
                <a href={'https://github.com/Chris-Forrest/React-Todo/tree/Chris-Forrest'} >Github Repo</a>
                <p>
                    A basic todo app.
                </p>
                <p>
                    CSS, React, Styled-components
                </p>
                <p>
                    • Clicking on task will put a line through the task indicating completion clicking on the clear completed will remove the task
                </p>
                <p>
                    • New tasks can be inputed and added to list of todo's
                </p>
                <p>
                    • Styled with CSS and Styled-components and deployed on netlify.com
                </p>
                </StyledVerticalBox>
            </StyledProjectCard>
           
            <StyledProjectCard>
                <StyledVerticalBox>
                <h4>Github User Cards</h4>
                <a href={'https://react-github-user-card-nine-fawn.vercel.app/'} > Deployed App</a>
                <a href={'https://github.com/Chris-Forrest/React-Github-User-Card/tree/Chris-Forrest'} >Github Repo</a>
                <p>
                    This is a react app that interacts with the github api to get the inputed users bio and followers.
                </p>
                <p> 
                    React, Styled-components, Axios, get requests
                </p>
                <p>
                    • Made a seach input that allows the search of github users 
                </p>
                <p>
                    • Use axios to make get requests to the github api
                </p>
                <p> 
                    • Styled with Styled-components and deployed on vercel
                </p>
                </StyledVerticalBox>
            </StyledProjectCard>  
            </StyledComponent>
        </div>
    )

}

export default ProjectSection;