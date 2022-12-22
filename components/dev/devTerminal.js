import Terminal from 'react-console-emulator'
import React, { Component } from 'react'

class DevTerminal extends Component {
  constructor(props) {
    super(props);
    this.projects = props.projects;
    this.setIsOpen = props.setIsOpen;
    this.setCurrentProject = props.setCurrentProject;
    this.terminal = React.createRef();
  }

  commands = {
    ls: {
      description: 'List all projects.',
      usage: 'ls',
      fn: () => {
        return (this.projects).map((project) => {
          return project.id + ' - ' + project.project + '\n';
        })
      }
    },
    open: {
      description: 'Open a project.',
      usage: 'open <projectNumber/projectName>',
      fn: (...args) => {
        let returned = false;
        if (args) {
          let result = (this.projects).map((project) => {
            if (project.id == args || project.project == args) {
              returned = true;
              this.setIsOpen(true);
              this.setCurrentProject(project);
              return 'Opening ' + project.project + '...';
            }
          });
          return (returned ? result : 'Project not found.');
        } else {
          return 'Please specify a project number.';
        }
      }
    },
  }  

  render() {
    return (
      <Terminal
        ref={this.terminal}
        commands={this.commands}
        welcomeMessage={"Welcome to the terminal! Enter help to learn more"}
        promptLabel={"visitor:~$"}
        promptLabelStyle={{ color: '#f87171' }}
        inputTextStyle={{ color: '#ffffff', outline: 'none', boxShadow: 'none', height: 'auto' }}
        style={{ minHeight: '80vh', marginBottom: '2rem' }}
        //TODO make terminal autoscroll to bottom
      />
    )
  }
}

export default DevTerminal;