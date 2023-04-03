import React from "react";

const SideBar = ({ tabs, selectedTab, changeTab }) => {
  return (
    <ul className="list-container">
      {tabs.map(({ name, subTabs, id: tabId }) => (
        <li className="list-item" key={tabId}>
          <span
            onClick={() => changeTab(tabId)}
            className={selectedTab.tab === tabId ? "active" : ""}
          >
            {name}
          </span>
          {selectedTab.tab === tabId && (
            <ul className="list-container">
              {subTabs.map(({ name, id: subtabId }) => (
                <li
                  className="list-item"
                  key={subtabId}
                  onClick={() => changeTab(tabId, subtabId)}
                >
                  <span
                    className={selectedTab.subtab === subtabId ? "active" : ""}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
