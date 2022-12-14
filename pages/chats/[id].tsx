import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Bubble from '../../components/bubble';
import MessageInput from '../../components/messageInput';

const ChatDetail: NextPage = () => {
  return (
    <Layout title="Chat Detail" canGoBack={true} hasTabBar={true}>
      <div className="pt-3 pb-2 px-5 relative">
        <div className="space-y-8 pb-20">
          {Array.from(Array(10).keys()).map(i => {
            return (
              <>
                <Bubble userImage="1" userId="1">
                  Hi how much are you selling them for?
                </Bubble>
                <Bubble userImage="2" userId="2" isMe={true}>
                  I want ￦20,000
                </Bubble>
                <Bubble userImage="1" userId="1">
                  미쳤어
                </Bubble>
                <Bubble userImage="2" userId="2" isMe={true}>
                  Ok, It's kidding. Let me ask again.
                </Bubble>
              </>
            );
          })}
          <div className="fixed bottom-14 w-full mx-auto max-w-lg inset-x-0 px-5">
            <MessageInput />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
