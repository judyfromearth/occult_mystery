import React from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomId } = useParams();

  const renderRoomContent = () => {
    switch(roomId) {
      case '통제실':
        return (
          <div className="control-room">
            <h2>{roomId}</h2>
            <p>This is the {roomId} page.</p>
            {/* 추가 콘텐츠를 여기에 삽입할 수 있습니다. */}
          </div>
        );
      default:
        return (
          <div>
            <h2>{roomId}</h2>
            <p>This is the {roomId} page.</p>
          </div>
        );
    }
  };

  return (
    <div>
      {renderRoomContent()}
    </div>
  );
};

export default Room;
