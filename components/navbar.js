import Header from "../components/header"
import NavButtons from "./navbuttons"

export default function Navbar({ title }) {
  return (
    
    <div className="fixed w-full bg-slate-100">
      <Header title={title} />

      <nav className="flex justify-between flex-wrap p-6 lg:px-0 container mx-auto">
        <div className="flex-grow flex items-center w-auto text-center justify-center">
          <ul className="items-center">
            <NavButtons showText={true} />
          </ul>
        </div>
      </nav>
    </div>
  )
}