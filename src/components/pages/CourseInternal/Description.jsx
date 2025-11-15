import React from "react";

const Description = () => {
  return (
    <div className=" w-full max-w-[1280px] bg-white p-5 md:p-10 leading-[28px] text-[16px] font-poppins text-gray-800">

     
      <h2 className="text-[28px] font-bold mb-6">Description</h2>

      {/* Paragraph 1 */}
      <p className="mb-6">
        The GS SPECIAL 2.0 VISION FOUNDATION BATCH 2025–26 is a 
        <strong> comprehensive and result-oriented program </strong>
        designed exclusively for aspirants preparing for 
        <strong> SSC, Railway, Defence, State-Level, and other one-day government examinations.</strong>
      </p>

      {/* Paragraph 2 */}
      <p className="mb-6">
        This course, conducted under the <strong>guidance of Khan Sir</strong>, combines expert teaching, 
        structured study material, and powerful exam strategies. With a focus on both 
        <strong> concept clarity and smart preparation</strong>, it helps students 
        <strong> build strong fundamentals, develop exam temperament,</strong> and 
        <strong> master time management techniques.</strong>
      </p>

      {/* SECTION: Course Features */}
      <h3 className="text-[22px] font-bold mt-8 mb-3">Course Features</h3>

      {/* Feature Block */}
      <div className="space-y-5">

        {/* 1 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Comprehensive & Strategic Curriculum
          </p>
          <p>
            The course covers all essential subjects — 
            <strong> History, Geography, Polity, Economics, Biology, Physics, Chemistry, and Current Affairs/Static G.K.</strong>
            <br />
            The content is regularly updated as per the latest exam trends, ensuring students stay aligned with evolving patterns and syllabi.
          </p>
        </div>

        {/* 2 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Live & Interactive Classes
          </p>
          <p>
            Engage in 
            <strong> live two-way interactive sessions </strong>
            with top educators where you can ask doubts in real-time. This interactive approach boosts engagement, builds confidence, and strengthens conceptual clarity.
          </p>
        </div>

        {/* 3 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Expert Faculty & Mentorship
          </p>
          <p>
            Learn from the <strong>most trusted and experienced educators</strong> under the mentorship of 
            <strong> Khan Sir</strong>.  
            <br />
            Each faculty member brings in-depth subject knowledge and years of teaching experience to help you 
            <strong> achieve your target score </strong>
            with the best strategies and shortcuts.
          </p>
        </div>

        {/* 4 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Comprehensive Study Material
          </p>
          <p>
            Receive <strong>high-quality, exam-oriented notes</strong> crafted by subject experts.  
            These materials simplify even the toughest topics and act as the perfect companion for self-study and quick revision.
            <br />
            <strong>Topic Wise Test:</strong> They help you analyze strength and weakness, refine time management, and improve accuracy.
          </p>
        </div>

        {/* 5 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Dedicated Doubt Sessions
          </p>
          <p>
            Clear every doubt! Special <strong>Doubt Solving Sessions</strong> are organized where teachers address individual queries and make difficult concepts easier to understand.
          </p>
        </div>

        {/* 6 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Exam Strategy & Performance Tips
          </p>
          <p>
            Get exclusive <strong>exam hacks, strategy sessions, and time-saving tricks</strong> directly from 
            <strong> Khan Sir and his team</strong> to enhance performance and overcome exam pressure.
          </p>
        </div>

        {/* 7 */}
        <div>
          <p className="font-semibold text-[18px] mb-1">
            Recorded Classes & PDF Notes
          </p>
          <p>
            Missed a class? No problem!  
            <br />
            Every session comes with <strong>recorded lectures and annotated PDF notes</strong>, ensuring you can revise anytime and anywhere.
          </p>
        </div>
      </div>

      {/* Key Highlights Section */}
      <h3 className="text-[22px] font-bold mt-10 mb-3">Key Highlights</h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>500+ Hours of Live Classes</li>
        <li>Recorded Videos for Revision</li>
        <li>Class PDF Notes with Annotations</li>
        <li>Monthly Current Affairs PDF</li>
        <li>Doubt Support</li>
        <li>Daily Practice Tests (DPT)</li>
        <li>Result–Oriented Study Plan</li>
        <li>Zoom Mentorship Sessions – Twice a Month</li>
        <li>Topic-Wise Practice Sheets</li>
      </ul>

      {/* Why Join */}
      <h3 className="text-[22px] font-bold mt-10 mb-3">
        Why Join GS SPECIAL 2.0 VISION FOUNDATION BATCH?
      </h3>

      <p className="mb-10">
        Learn under the guidance of <strong>Khan Sir & India's top educators</strong>.  
        Affordable fee with maximum benefits.  
        Comprehensive coverage of GS from zero to advanced level.  
        <br />
        Rigorous preparation for all one-day government exams.  
        Complete mentorship till selection.
      </p>
    </div>
  );
};

export default Description;
