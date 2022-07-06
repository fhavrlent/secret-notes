import { useParams } from 'react-router-dom';

export default function ReadMessageNotice() {
  const { messageId } = useParams<{ messageId: string }>();
  const messagePassword = window.location.hash.replace('#', '');

  return (
    <div>
      <h1>Read Message Notice</h1>
      <p>You are about to read a message.</p>
      <p>The message ID is {messageId}.</p>
      <p>The message password is {messagePassword}.</p>
    </div>
  );
}
