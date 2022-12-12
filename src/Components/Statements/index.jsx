import './index.css';

export function Statements(props){

    const refreshPage = () => { 
        window.location.reload(); 
    }  
    
    return(
        <div className="box_content">
            <img className="figure_end" src="https://cdn.discordapp.com/attachments/1016745958727491615/1049064045673730178/Profile_data-pana.png"
             alt="Persona illustration" />
            <h2>Hooray! You did it!</h2>
            <ul className="statements_list">
                <li>
                    <p>{props.statements[0].statement}</p>
                </li>
                
                <li>
                    <p>{props.statements[1].statement}</p>
                </li>
                
                <li>
                    <p>{props.statements[2].statement}</p>
                </li>

                <li>
                    <p>{props.statements[3].statement}</p>
                </li>
                
                <li>
                    <p>{props.statements[4].statement}</p>
                </li>

                <li>
                    <p>{props.statements[5].statement}</p>
                </li>
            </ul>
            <button onClick={refreshPage}
                className="button_restart">
                RESTART
            </button>
        </div>
    )
}