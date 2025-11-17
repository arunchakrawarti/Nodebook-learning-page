import React from 'react'

const Content = () => {
  return (
    <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-6">

      {/* LAST UPDATED */}
      <div>
        <p className="text-red-600 font-semibold text-sm">LAST UPDATED</p>
        <p className="text-gray-700 text-sm">24 September 2025</p>
      </div>

      {/* SECTION 1 */}
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Why Understanding the Syllabus Is Half the Battle Won
        </h2>
        <p className="text-gray-700">
          Before opening your books, take time to decode the exam pattern and syllabus.
          Know the marking scheme, subjects, weightage, and question types. 
          Analyze previous years’ papers to find recurring topics — this helps you 
          focus on what truly matters instead of studying everything blindly.
        </p>
      </div>

      {/* SECTION 2 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          The Perfect Study Plan for Busy Students
        </h2>
        <p className="text-gray-700">
          Design a daily and weekly study schedule that matches your energy levels.
        </p>

        <ul className=" pl-10 text-gray-700 mt-2">
          <li>✅Break topics into micro goals.</li>
          <li>✅Use the Pomodoro technique (25 mins study + 5 mins break).</li>
          <li> ✅Mix subjects to avoid burnout.</li>
          <li>✅Keep at least 1 revision slot daily.</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          How to Choose the Best Study Material (Without <br/>
          <span>Getting Confused)</span>
        </h2>
        <p className="text-gray-700">
          Avoid collecting too many books. Stick to one trusted source per subject 
          and supplement with online mock tests and educational YouTube channels.
        </p>

        <p className="text-gray-700 mt-2">Use mobile apps like:</p>

        <ul className="list-disc pl-10 text-gray-700 mt-2">
          <li>Testbook / Unacademy / Byju’s for mock tests</li>
          <li>Anki / Notion for notes and flashcards</li>
          <li>YouTube Shorts for quick concept refresh</li>
        </ul>
      </div>

      {/* SECTION 4 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Why Revision Is Your Secret Weapon
        </h2>

        <ul className="list-disc pl-10 text-gray-700">
          <li>The more you practice, the more confident you become.</li>
          <li>Attempt weekly mock tests.</li>
          <li>Analyze mistakes and make short notes of weak areas.</li>
          <li>Revise weekly — don’t wait for the last month.</li>
          <li>Remember: revision turns effort into memory.</li>
        </ul>
      </div>

      {/* SECTION 5 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Stay Motivated When the Syllabus Feels Endless
        </h2>

        <p className="text-gray-700">
          Mental strength decides your result. Maintain a positive attitude, eat healthy, 
          and get enough rest.
        </p>

        <ul className=" pl-10 text-gray-700 mt-2">
          <li>👉Do meditation or a short walk daily.</li>
          <li>👉Avoid comparing your progress with others.</li>
          <li>👉Visualize your success — it boosts confidence before exams.</li>
        </ul>
      </div>

      {/* SECTION 6 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          The Right Way to Attempt the Paper
        </h2>

        <p className="text-gray-700 mb-2">On exam day:</p>

        <ul className="list-disc pl-10 text-gray-700">
          <li>Read the question paper carefully.</li>
          <li>Attempt easy questions first.</li>
          <li>Manage time — don’t get stuck on one question.</li>
          <li>Double-check your OMR or online answers before submitting.</li>
        </ul>
      </div>

    </div>
  )
}

export default Content
