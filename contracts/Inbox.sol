pragma solidity ^0.4.19;

contract Inbox{
  string public message;

  function Inbox(string _initialMessage) public {
    message = _initialMessage;
  }

  function setMessage(string _newMessage) public {
    message = _newMessage;
  }
}
