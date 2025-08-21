function Solution() {
  return (
    <div className="min-h-screen w-full  text-white p-8 flex justify-center items-center">
      <div className="max-w-4xl space-y-6 text-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">🚦 Solution Overview</h2>

        <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed">
          <li>
            <span className="font-semibold text-green-400">Real-Time Traffic & Encroachment Reporting App:</span><br />
            Citizens can report traffic issues or illegal encroachments by uploading GPS-tagged photos. Users can also see live updates on blocked roads, construction zones, or cleared areas.
          </li>

          <li>
            <span className="font-semibold text-green-400">Dashboard for Authorities:</span><br />
            A central dashboard for authorities like LMC or Traffic Police to view live citizen reports, prioritize areas, and monitor actions taken. Helps streamline anti-encroachment operations.
          </li>

          <li>
            <span className="font-semibold text-green-400">Public Awareness & Education:</span><br />
            The app can notify users about the effects of encroachments and improper parking. A leaderboard system can gamify responsible reporting to drive better civic participation.
          </li>

          <li>
            <span className="font-semibold text-green-400">Smart Parking Integration:</span><br />
            Connect with local smart parking APIs or databases to display available nearby parking slots. This reduces illegal roadside parking and helps drivers find legal options faster.
          </li>

          <li>
            <span className="font-semibold text-green-400">AI-Based Camera Surveillance (Phase 2):</span><br />
            In future phases, AI-powered CCTV systems can automatically detect encroachments or unauthorized vendors in real-time, sending alerts to enforcement teams.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Solution;
