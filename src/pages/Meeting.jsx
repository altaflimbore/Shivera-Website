import { useEffect } from "react";

const Meeting = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("superagi-script")) {
      // If script exists but scheduler not initialized (edge-case), try init once
      if (window.initScheduler && !window.__superagi_scheduler_initialized) {
        window.initScheduler(
          "https://meetings.superagi.com/Altaf-Limbore/30min-1",
          "meeting-scheduler"
        );
        window.__superagi_scheduler_initialized = true;
      }
      return
    }

    const script = document.createElement("script");
    script.id = "superagi-script";
    script.src = "https://sales.superagi.com/meetingSchedulerWidget.js";
    script.async = true;

    script.onload = () => {
      if (window.initScheduler && !window.__superagi_scheduler_initialized) {
        window.initScheduler(
          "https://meetings.superagi.com/Altaf-Limbore/30min-1",
          "meeting-scheduler"
        );
        window.__superagi_scheduler_initialized = true;
      }
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("superagi-script");
      if (existingScript) existingScript.remove();
      if (window.__superagi_scheduler_initialized) {
        try {
          delete window.__superagi_scheduler_initialized;
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Schedule a Consultation</h1>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <div id="meeting-scheduler" className="w-full" style={{ minHeight: "650px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
