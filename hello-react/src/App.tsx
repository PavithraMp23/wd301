import TaskCard from './TaskCard';

import React from 'react';

function App() {
  return (
    <div className="min-h-screen p-6 ">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <h3>Project: Graduation Final Year Project</h3>

      <div className="flex flex-row">
        {/* Pending Section */}
        <div className="basis-full rounded-2xl shadow-md p-4">
          <h1 className="text-xl font-semibold mb-4">pending</h1>
          <TaskCard
            title="Build the website with static components"
            dueDate="09-09-2004"
            assigneeName="Pavithra"
          />
          <TaskCard
            title="Study about all this"
            dueDate="09-09-2004"
            assigneeName="Pavithra"

          />
        </div>

        {/* Done Section */}
        <div className="basis-full rounded-2xl shadow-md p-4">
          <h1 className="text-xl font-semibold mb-4">done</h1>
          <TaskCard
            title="Study about all this"
            isCompleted={true}
            completedAtDate="09-09-2004"
            assigneeName="Pavithra"
          />
          <TaskCard
            title="Study about all this"
            isCompleted={true}
            completedAtDate="09-09-2004"
            assigneeName="Pavithra"
          />
        </div>
      </div>

      
    </div>
  );
}

export default App;
