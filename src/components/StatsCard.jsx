import React from "react";

const StatsCard = () => {
  return (
    // Re-added p-6 for proper padding inside the card
    <div className="relative group h-full p-6 bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-[#5eead4]/40 hover:shadow-[0_0_25px_-8px_rgba(94,234,212,0.3)] cursor-pointer">
      {/* Re-added the main title */}
      <h3 className="text-2xl font-semibold text-[#5eead4] mb-6 tracking-wide text-center">
        Coding Stats
      </h3>

      {/* Added gap-6 to the flex container for equal spacing */}
      <div className="flex flex-col gap-6">
        {/* Group 1: LeetCard */}
        {/* Removed mb-6 from this div */}
        <div>
          <img
            src="https://leetcard.jacoblin.cool/AfeefBasheer?theme=dark&font=Baloo%202&ext=contest"
            alt="LeetCode Stats"
            className="rounded-lg w-full"
          />
          <p className="text-md font-semibold text-gray-300 text-center mt-2">
            LeetCode
          </p>
        </div>

        {/* Group 2: GitHub Stats */}
        {/* Removed mb-2 from this div */}
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=AfeefBasheer&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="rounded-lg w-full"
          />
          <p className="text-md font-semibold text-gray-300 text-center mt-2">
            GitHub Stats
          </p>
        </div>

        {/* Group 3: GitHub Streak */}
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=AfeefBasheer&theme=radical"
            alt="GitHub Streak"
            className="rounded-lg w-full"
          />
          <p className="text-md font-semibold text-gray-300 text-center mt-2">
            GitHub Streak
          </p>
        </div>
      </div>

      {/* Subtle Glow Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-2/3 h-[2px] bg-[#5eead4] transition-all duration-500" />
    </div>
  );
};

export default StatsCard;
