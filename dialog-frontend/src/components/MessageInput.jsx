import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  background: #162278;
  border: 1px solid #3246B5;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;

const Mic = styled.div`
  padding: 0 20px;
  color: #8C97D1;
  font-size: 20px;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  padding: 20px 0;
  font-size: 18px;
  color: white;
  border: none;
  outline: none;

  &::placeholder {
    color: #8C97D1;
  }
`;

const Button = styled.button`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3246B5;
  font-size: 28px;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #4258d6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function MessageInput({ input, setInput, sendMessage }) {
  return (
    <Wrapper>
      <InputBox>

        <Mic>🎤</Mic>

        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask whatever you want"
        />

        <Button
          onClick={sendMessage}
          disabled={!input.trim()}
        >
          ›
        </Button>

      </InputBox>
    </Wrapper>
  );
}

export default MessageInput;
