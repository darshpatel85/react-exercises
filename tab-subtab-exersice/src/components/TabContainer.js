import React, { useState } from "react";
import SideBar from "./SideBar";
import TabContent from "./TabContent";
import TABS from "../data/tabs";

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedSubTab, setSelectedSubTab] = useState(1);

  const changeTab = (tabIndex, subTabIndex = 1) => {
    setSelectedTab(tabIndex);
    setSelectedSubTab(subTabIndex);
  };

  const selectedTabData = TABS.find(
    (item) => item.id === selectedTab
  ).subTabs.find((item) => item.id === selectedSubTab);

  return (
    <div className="tab-container">
      <div style={{ width: "max-cntent" }}>
        <SideBar
          selectedTab={selectedTab}
          selectedSubTab={selectedSubTab}
          tabs={TABS}
          changeTab={changeTab}
        />
      </div>
      <div>
        <TabContent tabData={selectedTabData} />
      </div>
    </div>
  );
};

export default TabContainer;
