import React, { Component } from 'react';

class TechnicalSkills extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h3>🛠️Technical Skills</h3> 
                <div>
                    <ul>
                        <li>Programming Languages - C#, Javascript, Python (basic)</li>
                        <li>Frontend - React, Redux, jQuery</li>
                        <li>Backend - ASP.NET MVC, ASP.NET Core, Express</li>
                        <li>Database - MSSQL, MongoDB</li>
                        <li>Frameworks and tools - Entity Framework, Moq, NUnit, Docker</li>
                        <li>Others - AWS, GitHub, Jira, Redis</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
 
export default TechnicalSkills;