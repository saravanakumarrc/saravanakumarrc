import React, { Component } from 'react';

class WorkExperience extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h3>💼Work Experience</h3>
                <div>
                    <span style={{ lineHeight:`4em`, fontWeight:`600` }}>
                        <span style={{ fontSize:`larger` }}>Senior Software Engineer at Trimble</span>
                        <span style={{ fontSize:`medium` }}> - feb'17 to present</span>                    
                    </span>
                    <ul>
                        <li>Working as a full-stack developer of the Asset Maintenance Team, responsible for building new features and stabilizing the product by understanding the business use cases, proposing the design, coding as per the company standard and writing unit tests.</li>
                        <li>Hackathon project turned into a product feature, built a mechanism to store the parts information in the cloud, resulting in less data entry and high data integrity increases the returning customer base. This trustable base is used for building other cloud products.</li>
                    </ul>
                    <span style={{ lineHeight:`4em`, fontWeight:`600` }}>
                        <span style={{ fontSize:`larger` }}>Associate Developer at Cognizant</span>
                        <span style={{ fontSize:`medium` }}> - may'14 to dec'16</span>                    
                    </span>
                    <ul>
                        <li>Worked as a part of the Senior Enrollment System, responsible for building User interfaces and writing business rules to create an enrollment.</li>
                        <li>Subject matter expert developer in making enrollments via ETL process.</li>
                        <li>Won the first price in Hackathon by building customer support BOT.</li>
                    </ul>
                    <span style={{ lineHeight:`4em`, fontWeight:`600` }}>
                        <span style={{ fontSize:`larger` }}>Lead Software Engineer at MSC Technologies</span>
                        <span style={{ fontSize:`medium` }}> - feb'11 to may'16</span>                    
                    </span>
                    <ul>
                        <li>Lead and Developed a maritime ERP suite in a short span of 2.5 years along with 15 developers, The ERP is for end-to-end operations of shipping agents to create a voyage, service schedules, tariffs, booking, bill of lading, container movements, accounts and EDI process</li>
                        <li>Subject matter expert developer in container movements and bill-of-lading process.</li>
                        <li>Involved in performance tuning and technical design of the product.</li>
                        <li>After the huge success of the ERP suite, the firm iBox technology was acquired by MSC Shipping.</li>
                    </ul>
                </div>                
            </React.Fragment>
        );
    }
}
 
export default WorkExperience;