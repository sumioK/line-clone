import React, { useState } from 'react'

function SendMessage() {
  const [message, setMessage] = useState("");
  return <div>
    <form>
      <div className="sendMsg">
        <input  placeholder="メッセージを入力してください" type="text" onChange={(e) => setMessage(e.target.value)}/>
      </div>
    </form>


  </div>
}

export default SendMessage