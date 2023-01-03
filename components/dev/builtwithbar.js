import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function BuiltWithBar(data) {
	return (
    <div>
      <div className='flex flew-col w-full'>
        {Object.entries(data.data).map((chunk) => (
          <div style={{width: chunk[1][0] + '%', backgroundColor: chunk[1][1]}} key={chunk[0]} className={'text-sm font-medium text-blue-100 text-center px-3'}>&nbsp;</div>
        ))}
      </div>
      <div className='flex flew-col w-full p-2'>
        {Object.entries(data.data).map((chunk) => (
          <span key={chunk[0]} className='pr-4'><FontAwesomeIcon icon={faSquare} style={{color: chunk[1][1]}} className={'pr-2'} />{chunk[0]}&nbsp;</span>
        ))}
      </div>
    </div>
	);
}
