import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === '') {
      toast.error('Enter Valid Tasks!');
      return;
    }
    setTasks([...tasks, input]);
    setInput('');
    toast.success('Task Added Successfully!');
  };

  const delTasks = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    toast.info('Task Deleted');
  };

  return (
    <div className='flex flex-col justify-start items-center min-h-screen bg-gray-100 py-12 px-4'>
      <h1 className='mb-6 text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
        TODO APP
      </h1>

      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-black'>
        <div className='flex mb-6'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
            placeholder='Write your task...'
          />
          <button
            onClick={addTask}
            className='bg-red-500 hover:bg-red-800 text-white font-medium px-4 py-2 rounded-r-lg transition duration-200'
          >
            ADD
          </button>
        </div>
      </div>

      <div className='w-full max-w-md px-6 mt-4'>
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={task}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut', // This makes the transition smooth
              }}
              className='flex items-center justify-between mb-3 p-3 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition-all'
            >
              <div className='flex items-center'>
                <p className='text-lg mr-4'>✅ {task}</p>
              </div>
              <button
                onClick={() => delTasks(index)}
                className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700'
              >
                Delete
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;








  // import React, { useState } from 'react';
  // import { ToastContainer, toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
  
  // function App() {
  //   const [input, setInput] = useState('');
  //   const [tasks, setTasks] = useState([]);
  
  //   const addTask = () => {
  //     if (input.trim() === '') {
  //       toast.error('Enter Valid Tasks!');
  //       return;
  //     }
  //     setTasks([...tasks, input]);
  //     setInput('');
  //     toast.success('Task Added Successfully!');
  //   };
  
  //   const deleteTask = (index) => {
  //     const newTasks = tasks.filter((_, i) => i !== index);
  //     setTasks(newTasks);
  //     toast.info('Task Deleted');
  //   };
  
  //   const moveUp = (index) => {
  //     if (index === 0) return; // Can't move up the first task
  //     const newTasks = [...tasks];
  //     [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
  //     setTasks(newTasks);
  //   };
  
  //   const moveDown = (index) => {
  //     if (index === tasks.length - 1) return; // Can't move down the last task
  //     const newTasks = [...tasks];
  //     [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
  //     setTasks(newTasks);
  //   };
  
  //   return (
  //     <div className='flex flex-col justify-start items-center min-h-screen bg-gray-100 py-12 px-4'>
  //       <h1 className='mb-6 text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
  //         TODO APP
  //       </h1>
  //       <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
  //         <div className='flex mb-6'>
  //           <input
  //             value={input}
  //             onChange={(e) => setInput(e.target.value)}
  //             className='flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
  //             placeholder='Write your task...'
  //           />
  //           <button
  //             onClick={addTask}
  //             className='bg-red-500 hover:bg-red-800 text-white font-medium px-4 py-2 rounded-r-lg transition duration-200'
  //           >
  //             ADD
  //           </button>
  //         </div>
  //       </div>
  
  //       <div className='w-full max-w-md px-6 mt-4'>
  //         {tasks.map((task, index) => (
  //           <div key={index} className='flex items-center justify-between mb-2 text-gray-800'>
  //             <div className='flex items-center'>
  //               <p className='text-lg mr-4'>✅ {task}</p>
  //               <button
  //                 onClick={() => moveUp(index)}
  //                 className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700'
  //               >
  //                 ↑
  //               </button>
  //               <button
  //                 onClick={() => moveDown(index)}
  //                 className='bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-700 ml-2'
  //               >
  //                 ↓
  //               </button>
  //             </div>
  //             <button
  //               onClick={() => deleteTask(index)}
  //               className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700'
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  
  //       <ToastContainer />
  //     </div>
  //   );
  // }
  
  // export default App;