import React from "react";

const Content1 = () => {
  return (
    <div className="w-full max-w-[1100px] px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-6">

      {/* Step 1 */}
      <h2 className="text-[18px] font-extrabold mt-6 mb-2">
        Step 1: Understand the Exam Before You Start
      </h2>

      <p className="mb-2">
        Before diving into books, understand the exam inside-out. Every exam has its own pattern, marking scheme, and difficulty level. Take time to analyze:
      </p>

      <ul className="list-disc ml-10 space-y-1">
        <li>The official syllabus</li>
        <li>The previous year papers</li>
        <li>The weightage of topics</li>
        <li>The time available per question</li>
      </ul>

      <p className="mt-2">
        👉 <span className="font-semibold">Example:</span> If you’re preparing for SSC CGL, focus heavily on General Awareness, Quantitative Aptitude, and Reasoning.  
        If it’s NEET, Biology will hold the maximum weight.
      </p>

      <p className="mt-2">
        📝 <span className="font-semibold">Pro Tip:</span> Create a one-page “Exam Blueprint” where you list all subjects, marks distribution, and topic importance. Stick it near your study table — it’ll guide your preparation daily.
      </p>

      {/* Step 2 */}
      <h2 className="text-[18px] font-extrabold mt-6 mb-2">
        📚 Step 2: Build a Realistic Study Plan That Works for You
      </h2>

      <p className="mb-2">
        Don’t blindly follow someone else’s routine. Your study plan must match your energy, focus, and availability.
      </p>

      <p className="mb-2">🕒 Here’s a sample schedule:</p>

      <ul className="list-disc ml-10 space-y-1">
        <li><span className="font-semibold">Morning (6 AM - 9 AM):</span> Study your toughest subject.</li>
        <li><span className="font-semibold">Midday (10 AM - 1 PM):</span> Practice questions or test series.</li>
        <li><span className="font-semibold">Afternoon (3 PM - 6 PM):</span> Revise old topics or watch concept videos.</li>
        <li><span className="font-semibold">Night (8 PM - 10 PM):</span> Make short notes or flashcards.</li>
      </ul>

      <p className="mt-2">
        Break big goals into micro tasks — for example, instead of “Study Polity,” say “Read Fundamental Rights (Articles 12–35).”
      </p>

      <p className="mt-2">
        💡 Use the Pomodoro technique (25 min study + 5 min break) to stay fresh and focused.
      </p>

      {/* Step 3 */}
      <h2 className="text-[18px] font-extrabold mt-6 mb-2">
        🧠 Step 3: Choose the Right Study Material
      </h2>

      <p className="mb-2">
        Too many books can kill your clarity. Pick one standard book per subject, and supplement it with online resources or test series.
      </p>

      <p className="mb-2 font-semibold">📘 Recommended Resources:</p>

      <ul className="list-disc ml-10 space-y-1">
        <li>NCERTs for conceptual clarity (especially for UPSC or State PSC exams)</li>
        <li>Lucent GK / Manorama Yearbook for general awareness</li>
        <li>Testbook, Unacademy, or Adda247 for online practice</li>
        <li>Anki / Notion for digital flashcards and notes</li>
        <li>YouTube for concept revision (channels like Study IQ, Wifistudy)</li>
      </ul>

      <p className="mt-2">
        Remember: It’s not about how many sources you read; it’s about how well you revise what you’ve already studied.
      </p>

      {/* Step 4 */}
      <h2 className="text-[18px] font-extrabold mt-6 mb-2">
        🧩 Step 4: Practice, Analyze, and Revise
      </h2>

      <p className="mb-2">
        Practice is the key that unlocks exam success. After finishing a topic, immediately attempt topic-wise quizzes or mock tests.
      </p>

      <ul className="list-disc ml-10 space-y-1">
        <li>✅ Solve at least 2 full-length tests per week.</li>
        <li>✅ After each test, analyze your mistakes — note the topics you got wrong.</li>
        <li>✅ Maintain a “Mistake Book” where you record every error and its correction.</li>
      </ul>

      <p className="mt-2 font-semibold">Revision Strategy:</p>

      <ul className="list-disc ml-10 space-y-1">
        <li><span className="font-semibold">Daily:</span> Revise short notes made the same day.</li>
        <li><span className="font-semibold">Weekly:</span> Revisit important formulas, dates, and definitions.</li>
        <li><span className="font-semibold">Monthly:</span> Take one complete mock exam and evaluate your growth.</li>
      </ul>

      <p className="mt-2 italic">
        “Revision turns hard work into memory, and memory turns effort into results.”
      </p>

      {/* Step 5 */}
      <h2 className="text-[18px] font-extrabold mt-6 mb-2">
        💪 Step 5: Maintain a Strong Mindset & Healthy Routine
      </h2>

      <p className="mb-2">
        Competitive exam prep isn’t just a test of knowledge — it’s a test of mental strength. There will be days when you’ll feel tired, demotivated, or anxious. That’s normal. What matters is getting back up.
      </p>

      <p className="mb-2 font-semibold">🧘‍♀️ Try This Routine:</p>

      <ul className="list-disc ml-10 space-y-1">
        <li>Start your day with a 10-min meditation or light exercise.</li>
        <li>Eat healthy, avoid heavy junk food.</li>
        <li>Keep your phone away during study hours.</li>
        <li>Sleep at least 6–7 hours daily.</li>
      </ul>

      <p className="mt-2">
        Remember, success is 20% talent and 80% consistency. Even small, daily improvements add up to massive results over months.
      </p>

      {/* Step 6 */}
      <h2 className="text-[18px] font-extrabold mt-6 mb-2">
        🧾 Step 6: Exam Day Strategy
      </h2>

      <p className="mb-2">
        After months of preparation, exam day is your moment to shine. To make the most of it, follow these tips:
      </p>

      <p className="mb-2 font-semibold">🧩 One Day Before:</p>

      <ul className="list-disc ml-10 space-y-1">
        <li>Don’t learn anything new — only revise.</li>
        <li>Keep your admit card, ID, and stationery ready.</li>
        <li>Sleep early and stay calm.</li>
      </ul>

    </div>
  );
};

export default Content1;
