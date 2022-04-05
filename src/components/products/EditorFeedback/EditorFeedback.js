import React from 'react';
import {AiOutlineCloudUpload, AiOutlineCheckCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {EditorFeedbackStyles, Feedback, FeedbackMessage, FeedbackOption} from './styles'
import {Button} from './../../../ui/buttons'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedbackStyles  {...props}>
          {
            !status
            ?
            <Feedback>
            <AiOutlineCheckCircle color="d9f99d" size="12rem"/>
            <FeedbackMessage>
              Product Uploaded Successfully
            </FeedbackMessage>
          </Feedback>
          :
          <Feedback>
          <AiOutlineCloudUpload color="d9f99d" size="12rem"/>
          <FeedbackMessage>
            Uploading New Product
          </FeedbackMessage>
        </Feedback>
          }
          <FeedbackOption>
            <Button 
            bc="tomato" 
            color="white"
            onClick={()=> writeCompleted(false)}
            disabled={status}
            >Add Another Product</Button>
            <Button 
            bc="cornflowerblue" 
            color="white"
            onClick={()=> navigator('/dashboard')}
            >View All Products</Button>
          </FeedbackOption>

        </EditorFeedbackStyles>
  )
}

export default EditorFeedback