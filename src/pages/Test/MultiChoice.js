import {useState} from 'react'

export const MultiChoice =({initial})=>{

    const [selectedOption, setQuery] = useState(initial);

    const handleChange = (changeEvent) =>{
        setQuery(
            changeEvent.target.value = {selectedOption}
        )
    }
    const handleFormSubmit= (formSubmitEvent) =>{
        formSubmitEvent.preventDefault();

        console.log('You have selected:', selectedOption);
    }


    return(
        <>
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="bg-blue-300">
                    <label>
                        <input type="radio" value="option1"
                               onClick={ {selectedOption : 'option1' }}
                               onChange={handleChange} />
                        Option 1
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2"
                               onClick={{selectedOption : 'option2'}}
                               onChange={handleChange}/>
                        Option 2
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option3"
                               checked={{selectedOption : 'option3'}}
                               onChange={handleChange} />
                        Option 3
                    </label>
                </div>

                <button className="btn btn-default" type="submit">Save</button>

            </form>

        </div>

        </>
    )
}

export default MultiChoice








//
// import React, {Component} from "react";
// import ReactDOM from "react-dom";
// //import "./style.css";
// import questionAPI from './Question';
// import QuestionBox from './QuestionBox';
// import Result from './ResultBox';
//
// class MultiChoice extends Component {
//     constructor() {
//         super();
//         this.state = {
//             questionBank: [],
//             score: 0,
//             responses: 0
//         };
//     }
//
// // Function to get question from ./question
//     getQuestions = () => {
//         questionAPI().then(Question => {
//             this.setState({questionBank: Question});
//         });
//     };
//
// // Set state back to default and call function
//     playAgain = () => {
//         this.getQuestions();
//         this.setState({score: 0, responses: 0});
//     };
//
// // Function to compute scores
//     computeAnswer = (answer) => {
//         if (answer === answer[0] ) {
//             this.setState({
//                 score: this.state.score + 1
//             });
//         }else if (answer === answer[1] ) {
//             this.setState({
//                 score: this.state.score + 2
//             });
//         this.setState({
//             responses: this.state.responses < 10
//                 ? this.state.responses + 1
//                 : 10
//         });
//     };
//
// // componentDidMount function to get question
//     componentDidMount() {
//         this.getQuestions();
//     }
//
//     render() {
//         return (<div className="container">
//             <div className="title">
//                 Grit Questionnaire
//             </div>
//
//             {this.state.questionBank.length > 0 &&
//             this.state.responses < 5 &&
//             this.state.questionBank.map(({question, answers,
//                                               questionId}) => <QuestionBox question=
//                                                                                        {question} options={answers} key={questionId}
//                                                                                    selected={answer => this.computeAnswer(answer)}/>)}
//
//             {
//                 this.state.responses === 5
//                     ? (<Result score={this.state.score}
//                                playAgain={this.playAgain}/>)
//                     : null
//             }
//
//         </div>)
//     }
// }
//
// ReactDOM.render(<MultiChoice/>, document.getElementById("root"));
// export default MultiChoice