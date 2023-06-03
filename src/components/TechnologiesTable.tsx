import { ReactElement } from "react";
import './TechnologiesTable.css';


interface Technology {
    name: string,
    timeOfExperience: string
}


const technogiesList: Array<Technology> = [
    {
        name: "D programming Language",
        timeOfExperience: "2 years"
    },
    {
        name: "C++ programming Language",
        timeOfExperience: "3 year"
    },
    {
        name: "C pogramming Language",
        timeOfExperience: "3 year"
    }
];


export default function TechnologiesTable(): ReactElement {
    return (<>
        <table className="techonologies--table">
            <thead className="techologies--header">
                <tr className="technologies--row">
                    <th className="technologies--cell">Name</th>
                    <th className="technologies--cell">Time of experience</th>
                </tr>
            </thead>
            <tbody className="techologies--body">
                {technogiesList.map((obj) => {
                    return <>
                        <tr>
                            <td className="technologies--cell">{obj.name}</td>
                            <td className="technologies--cell">{obj.timeOfExperience}</td>
                        </tr>
                    </>;
                })}
            </tbody>
        </table>
    </>)
}
