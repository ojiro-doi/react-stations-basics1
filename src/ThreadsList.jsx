import React, { useEffect, useState } from "react";

const ThreadsList = () => {
  const [threads, setThreads] = useState([]);

  const fetchThreads = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => {
        console.log("res", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setThreads(data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <table border={1}>
        {threads.map((thread) => (
          <tr>
            <td key={thread.id}>{thread.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ThreadsList;
