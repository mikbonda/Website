import React, { Component } from 'react';
import FlexView from 'react-flexview';


class Resume extends Component {
    render(){
        return (
            <div className="resumeClass">
                   <FlexView column height={"100vh"} hAlignContent='left' vAlignContent='center' marginLeft="25vw">
                        <h2 className="headingExperience" id="headingExperience">Work Experience</h2>
                        <div class="content">
                            <div class="item">
                                <h3 class="title">Software Engineer Intern - <span class="place"><a href="http://getconga.com">Conga</a></span> <span class="year">(Summer 2018)</span></h3>
                                <p className="experienceDescription">
                                •	Worked in an Agile environment with others on a project to analyze information that we had in a way to influence data driven decisions in a quick and effective way
                                <br/>
                                •	Used Python2/Python3 libraries to pipeline data, while converting it to different file formats to assist in compatibility and simplicity
                                <br/>
                                •	Unit tested using Mock libraries such as moto and unittest.mock to test builds that ran within Teamcity
                                <br/>
                                •	Used AWS services such as S3 and Lambda to store logs and information that was computed 
                                <br/>
                                •	Used Einstein Analytics and Salesforce to integrate custom events with clients/companies in order to see how a person went through various applications
 </p>
                            </div>
                            <div class="item">
                                <h3 class="title">Information Systems Work Study - <span class="place"><a href="https://www.du.edu">University of Denver</a></span> <span class="year">(October 2015 - June 2017)</span></h3>
                                <p className="experienceDescription">
                                •	Performed all system administration responsibilities to include: installation and configuration of software, hardware, and networks; monitored system performance and troubleshooting using Windows Active Directory
                                <br/>
                                •	Responsible for network and server maintenance, telecommunication upgrades/installations, end-user troubleshooting, installation of new equipment, account and workstation management, and system upgrades
                                <br/>
                                •	Demonstrated competence within multiple operating systems and platforms such as: Windows 7, Windows 10, OSX, and UNIX based operating systems
                                </p>
                            </div>
                            <div class="item">
                                <h3 class="title">Information Technology Intern - <span class="place"><a href="http://tun.touro.edu">Touro University</a></span> <span class="year">(Summer 2017)</span></h3>
                                <p className="experienceDescription">
                                •	Developed scripts using Windows Active Directory to onboard new employees and incoming students
                                <br/>
                                •	Performed troubleshooting for system administrator roles within UNIX and Windows based servers
                                <br/>
                                •	Trained new employees on operation of network; managed access to privileged files within Active Directory
                                <br/>
                                •	Maintained system printers, personal computers, desktops, various hardware and scientific equipment
                                <br/>
                                •	Improved capability of 64-bit operating systems for dated legacy scientific equipment and apparatus

                                </p>
                            </div>
                            <div class="item">
                                <h3 class="title">Programmer - <span class="place"><a href="https://www.du.edu">University of Denver</a></span> <span class="year">(Second Half of 2017)</span></h3>
                                <p className="experienceDescription">
                                •	Coordinated and worked with other computer science students to build AI
                                <br/>
                                •	Created a pseudo operating system for the robot using Lua and C++ involving using on board sensors with a limited resource environment
                                <br/>
                                •	Defined proper priority levels and memory management to assist robot
                                </p>
                            </div> 
                        </div>
                     </FlexView>
            </div>
        );
}
};  

export default Resume;