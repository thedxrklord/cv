import { FiExternalLink } from 'react-icons/fi';

export const Portfolio = (props) => {
    return (
        <div id="portfolio" className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            {props.projects.map((callout, index) => (
              <div key={index} className="text-gray-200 border-l-4 mb-5 text-center rounded p-4 border-custom-red">
                {callout.url ? <a href={callout.url} target="_blank"><FiExternalLink /></a> : ""}
                {callout.url ? <a className="text-center" href={callout.url} target="_blank"><h2 className="text-center">{callout.name}</h2></a>
                            : <h2 className="text-center">{callout.name}</h2>}
                <p>{callout.description}</p>
                <div className="mt-10">
                {callout.stack.map((technology, index) => (
                  <span key={index} className="bg-gray-600 text-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{technology}</span>
                ))}
                </div>
              </div>
            ))}
          </div>
    );
}