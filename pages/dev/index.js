import Header from "../../components/header";
import Terminal from 'react-console-emulator';
import React, { Component } from 'react';
import data from '../../data.json';
import { useRouter } from "next/router";

class DevTerminal extends Component {
  constructor(props) {
    super(props);
    this.projects = props.projects;
    this.experience = props.experience;
    this.router = props.router;
    this.terminal = React.createRef();
  }

  commands = {
    ls: {
      description: 'List projects or work.',
      usage: 'ls <projects|work>',
      fn: (...args) => {
        if (args && 'projects' == args) {
          return (this.projects).map((project) => {
            return project.id + '\n';
          })
        } else if (args && 'work' == args) {
          return (this.experience).map((job) => {
            return job.role + ' at ' + job.company + '\n' + job.start + ' - ' + job.end + ' | ' + job.location + '\n' + job.details + '\n' + '-------------------------' + '\n';
          })
        } else {
          return 'enter \'ls projects\' or \'ls work\'';
        }
      }
    },
    open: {
      description: 'Open a project.',
      usage: 'open <project>',
      fn: (...args) => {
        let returned = false;
        if (args) {
          let result = (this.projects).map((project) => {
            if (project.id == args) {
              returned = true;
              this.router.push('/dev/' + project.id);
              return 'Opening ' + project.title + '...';
            }
          });
          return (returned ? result : 'Project not found.');
        } else {
          return 'Please specify a project number.';
        }
      }
    },
    exit: {
      description: 'Exit the terminal.',
      usage: 'exit',
      fn: () => {
        this.router.push('/');
        return 'Exiting...';
      }
    },
  }  

  render() {
    return (
      <Terminal
        ref={this.terminal}
        commands={this.commands}
        welcomeMessage={"Welcome! Enter help to learn more or exit to return to the home page."}
        promptLabel={"guest:~$"}
        promptLabelStyle={{ color: '#f87171' }}
        inputTextStyle={{ color: '#ffffff', outline: 'none', boxShadow: 'none', height: 'auto' }}
        style={{ minHeight: '80vh', marginBottom: '2rem', backgroundColor: '#000000', border: 'none' }}
      />
    )
  }
}
  
function Dev() {
  const Terminal = DevTerminal;
  const projects = data.cs_projects;
  const experience = data.work.filter((job) => job.tags.includes('cs'));
  const router = useRouter();

  return (
    <div className='bg-black min-h-screen'>
      <Header title={"Dev Work"} />
      <main className='mx-auto flex flex-col bg-black items-center text-white justify-center h-full'>
        <div className="w-full">
          <Terminal projects={projects} experience={experience} router={router} />
        </div>
      </main>
    </div>
  )
}

export default Dev;