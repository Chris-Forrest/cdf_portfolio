import React from 'react';
import { Document} from 'react-pdf';


const ResumeSection = () => {



    return(
        <div className='resumeSection'>
            <Document
              file="Resume.pdf"
            >
            </Document>

        </div>

    );


};

export default ResumeSection;