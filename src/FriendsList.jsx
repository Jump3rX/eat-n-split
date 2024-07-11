import React from "react";
import Friend from "./Friend";
const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
};

export default FriendsList;
