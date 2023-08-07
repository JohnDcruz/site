export default function TerminalPopupContent({ setIsOpen }) {
  return (
    <div className="flex flex-col text-left">
      <p className="font-semibold text-2xl mb-2">Welcome to the terminal!</p>
      <p>List of commands: </p>
      <p>ls: list all projects</p>
      <p>open (project number OR project name): </p>
      <p>exit: exit the terminal and switch to a list view of project</p>
      <p>help: display a list of available commands and their usage</p>
    </div>
  )
}