import React, { useState, useMemo } from "react";
import SideBar from "./SideBar";
import TabContent from "./TabContent";
import TABS from "../data/tabs";

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedSubTab, setSelectedSubTab] = useState(1);

  const onTabChange = (tabId, subTabId = 1) => {
    setSelectedTab(tabId);
    setSelectedSubTab(subTabId);
  };

  const selectedTabData = useMemo(
    () => TABS.find((item) => item.id === selectedTab),
    [selectedTab]
  );
  const selectedSubTabData = selectedTabData.subTabs.find(
    (item) => item.id === selectedSubTab
  );

  return (
    <div className="tab-container">
      <div className="sidebar-container">
        <SideBar
          selectedTab={selectedTab}
          selectedSubTab={selectedSubTab}
          tabs={TABS}
          onTabChange={onTabChange}
        />
      </div>
      <div>
        <TabContent tabData={selectedSubTabData} />
      </div>
    </div>
  );
};

export default TabContainer;
