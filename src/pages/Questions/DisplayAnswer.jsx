import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div>
                <button type='button'>Sharer</button>
                <button type='button'>Delete</button>
                </div>
                <div>
                  <p>answer {ans.answeredOn}</p>
                  <Link to={`/user/${question.userId}`} className='user-link' style={{color:"#00086d8"}}>
                    <Avatar backgroundColor={"green"} px={"8px"} py={"5px"}>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                    <div>
                        {
                            question.userPosted
                        }
                    </div>
                </Link>
                </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer
