import React from 'react';
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 16px 20px;
  margin-bottom: 20px;
  border-radius: 24px;
  font-size: 18px;
  line-height: 1.6;

  ${({ role }) =>
    role === "user"
      ? `
        background: #3246B5;
        align-self: flex-end;
        color: white;
      `
      : `
        background: #1A237E;
        align-self: flex-start;
        color: #E5E7FF;
      `}
`;

function MessageList({ messages, loading }) {
  return (
    <List>
      {messages.map((m, i) => (
        <MessageBubble key={i} role={m.role}>
          {m.content}
        </MessageBubble>
      ))}

      {loading && (
        <MessageBubble role="assistant">
          AI is typing...
        </MessageBubble>
      )}
    </List>
  );
}

export default MessageList;

