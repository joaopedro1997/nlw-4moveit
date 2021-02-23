import { useState } from "react";

export function ExperienceBar() {
  // const [progress, SetProgress] = useState(0);

  return (
    <header className="experience-bar">
      <span>0</span>
      <div>
        <div style={{ width: "60%" }} />

        <span className="current-expirience" style={{ left: "60%" }}>
          300 xp
        </span>
      </div>
      <span>600</span>
    </header>
  );
}
