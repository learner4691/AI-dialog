import React from 'react';
import styled from "styled-components";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Page = styled.div`
  min-height: 100vh;
  background: #0B1560;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 24px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 56px 40px 40px;
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: #3246B5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-size: 24px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Hello = styled.h2`
  font-size: 36px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Question = styled.h1`
  font-size: 44px;
  font-weight: 700;
  line-height: 1.2;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #AAB3E6;
  line-height: 1.6;
  max-width: 420px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const MessagesWrapper = styled.div`
  margin-top: 24px;
`;

const InputWrapper = styled.div`
  margin-top: auto;
  padding-bottom: 40px;
`;

function Chat({ messages, input, setInput, sendMessage }) {
  return (
    <Page>
      <Container>

        <IconBox>💬</IconBox>

        <TitleBlock>
          <Hello>Hi there!</Hello>

          <Question>
            What would you like to know?
          </Question>

          <Subtitle>
            Use one of the most common prompts below
            <br />
            or ask your own question
          </Subtitle>
        </TitleBlock>

        <MessagesWrapper>
          <MessageList messages={messages} />
        </MessagesWrapper>

        <InputWrapper>
          <MessageInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
        </InputWrapper>

      </Container>
    </Page>
  );
}

export default Chat;

