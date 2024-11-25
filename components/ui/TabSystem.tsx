import React, { useState } from "react";

// Define the type for the props
interface TabSystemProps {
  tabs: string[];
}

const TabSystem = ({ tabs }: TabSystemProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="tab-system">
      <ul className="tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {activeTab === "Profile" && <div>Profile Content</div>}
        {activeTab === "Searches" && <div>Searches Content</div>}
        {activeTab === "Matches" && <div>Matches Content</div>}
      </div>
    </div>
  );
};

export default TabSystem;
