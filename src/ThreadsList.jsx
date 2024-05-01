import React, { useEffect, useState } from 'react';

const ThreadsList = () => {
  const [threads, setThreads] = useState([]);

  const fetchThreads = () => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then((response) => {
        console.log('res', response);
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        setThreads(data);
      })
      .catch((error) => {
        console.log('error');
      });
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div className="container flex flex-col items-center">
      <h1 className="p-6 text-2xl font-bold">新着スレッド</h1>
      <table className="">
        {threads.map((thread) => (
          <tr>
            <td className="border-2 border-black py-2 pl-2 pr-8" key={thread.id}>
              {thread.title}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ThreadsList;
