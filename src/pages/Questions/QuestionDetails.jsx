import React from 'react'
import { Link, useParams } from 'react-router-dom';
import upVote from "../../assets/sort-up.svg"
import downVote from "../../assets/sort-down.svg"
import "./Questions.css"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from "./DisplayAnswer"

const QuestionDetails = () => {

    const {id}=useParams();
    var questionList=[{
        _id:'1',
        upVotes:5,
        downVotes:3,
        questionTitle:"what is a function",
        questionBody:"It meant to be",
        questionTags:["java", "node.js", "react.js", "mongodb"],
        userId:1,
        noOfAnswers:3,
        userPosted:"abc",
        askedOn:"jan 1",
        answer:[{
          answerBody:"Answer",
          userAnswered:"Ramu",
          answeredOn:"jan 2",
          userId:2,
        }]
      },{
        _id:'2',
        upVotes:3,
        downVotes:3,
        questionTitle:"what is a function",
        questionBody:"It meant to be",
        questionTags:["java", "node.js", "react.js", "mongodb"],
        userId:2,
        noOfAnswers:1,
        userPosted:"abc",
        askedOn:"jan 1",
        answer:[{
          answerBody:"Answer",
          userAnswered:"Ramu",
          answeredOn:"jan 2",
          userId:2,
        }]
      }];

  return (
    <div className='question-details-page'>
      {
        questionList===null?(
            <h1>Loading...</h1>
        ):(
            <>
                {
                    questionList.filter(question=>question._id===id).map((question)=>(
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className="question-votes">
                                        <img src={upVote} alt="" width={18} className='votes-icon'/>
                                        <p>{question.upVotes-question.downVotes}</p>
                                        <img src={downVote} alt="" width={18}/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`/user/${question.userId}`} className='user-link' style={{color:"#00086d8"}}>
                                                    <Avatar backgroundColor={"orange"} px={"8px"} py={"5px"}>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {
                                                            question.userPosted
                                                        }
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers!==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAnswer key={question._id} question={question}/>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form>
                                    <textarea name='' rows={10} cols={30} id=''></textarea>
                                    <br/>
                                    <input type='submit' className='post-ans-btn' value="Post Your Answer"/>
                                </form>
                                <p>
                                    Browse Questions Tagged
                                    {
                                        question.questionTags.map((tag)=>(
                                            <Link to={"/Tags"} key={tag} className='ans-tags'>{tag}</Link>
                                        ))
                                    } or
                                    <Link to={'/AsQuestion'} style={{textDecoration:"none", color:"#009dff"}}> ask your own question</Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        )
      }
    </div>
  )
}

export default QuestionDetails
