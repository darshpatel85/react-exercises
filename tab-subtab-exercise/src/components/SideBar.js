import React from "react";

const SideBar = ({ tabs, selectedTab, selectedSubTab, onTabChange }) => (
  <ul className="list-container">
    {tabs.map(({ name, subTabs = [], id: tabId }) => {
      const isActiveTab = selectedTab === tabId;
      const tabClassName = isActiveTab ? "active" : "";
      const hasSubTabs = subTabs.length > 0;

      const handleTabChange = () => {
        onTabChange(tabId);
      };

      const handleSubTabChange = (subTabId) => {
        onTabChange(tabId, subTabId);
      };

      return (
        <li className="list-item" key={tabId}>
          <span onClick={handleTabChange} className={tabClassName}>
            {name}
          </span>
          {isActiveTab && hasSubTabs && (
            <SideBar
              tabs={subTabs}
              selectedTab={selectedSubTab}
              onTabChange={handleSubTabChange}
            />
          )}
        </li>
      );
    })}
  </ul>
);

export default SideBar;
