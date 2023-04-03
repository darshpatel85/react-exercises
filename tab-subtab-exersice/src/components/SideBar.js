import React from "react";

const SideBar = ({ tabs, selectedTab, selectedSubTab, changeTab }) => (
  <ul className="list-container">
    {tabs.map(({ name, subTabs, id: tabId }) => {
      const isActiveTab = selectedTab === tabId;
      const tabClassName = isActiveTab ? "active" : "";
      const hasSubTabs = !!subTabs;
      return (
        <li className="list-item" key={tabId}>
          <span onClick={() => changeTab(tabId)} className={tabClassName}>
            {name}
          </span>
          {isActiveTab && hasSubTabs ? (
            <SideBar
              tabs={subTabs}
              selectedTab={selectedSubTab}
              changeTab={(subTabId) => changeTab(tabId, subTabId)}
            />
          ) : (
            <></>
          )}
        </li>
      );
    })}
  </ul>
);

export default SideBar;
