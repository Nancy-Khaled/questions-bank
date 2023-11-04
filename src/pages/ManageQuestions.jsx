import React, { useState } from "react";

import { MdAddBox } from "react-icons/md";

export default function ManageQuestions(props) {

  //const [isExpanded, setExpanded] = useState(false)

  const [choice, setChoice] = useState({
    content: ""
  })

  function handleChange (event) {
    const {name, value} = event.target

    setChoice(prevChoice => {
      return {
        ...prevChoice,
        [name]: value
      }
    })
  }

  function addChoice(event) {
    // props.onAdd(choice)
    // setChoice({
    //   content: ""
    // })
    //event.preventDefault();
  }

  // function expand() {
  //   setExpanded(true)
  // }

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card">
              <div className="card-body p-5">
                <form className="row g-3" action="/questions" method="">
                  <div className="col-md-12">
                    <label htmlFor="question" className="form-label">
                      Question
                    </label>
                    <textarea
                      className="form-control"
                      id="question"
                      rows="3"
                      placeholder="Enter your question"
                    ></textarea>
                  </div>
                  <label className="form-label">Answers</label>
                  <div className="answer-content d-flex align-items-center">
                    <div className="col-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                      </div>
                    </div>
                    <div className="col-10">
                    {(
                      <input
                      onChange={handleChange}
                      //value={choice.content}
                        type="text"
                        className="form-control"
                        id="answers"
                        placeholder="Enter your answer"
                      />
                    )}
                    </div>
                    <div className="col-1 text-right">
                      <MdAddBox className="text-3xl text-green-700 cursor-pointer" onClick={addChoice}></MdAddBox>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-secondary">Add Question</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
