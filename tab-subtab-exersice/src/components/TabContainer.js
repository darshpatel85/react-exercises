import React, { useState } from "react";
import SideBar from "./SideBar";
import TabContent from "./TabContent";
import TabData from "../data/tabs";

const TABS = TabData.map((item, itemIndex) => {
  //give unique ID to each tab
  item.id = itemIndex;
  item.subTabs = item.subTabs.map((subItem, subItemIndex) => {
    //give unique ID to each tab
    subItem.id = subItemIndex;
    return subItem;
  });
  return item;
});

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState({
    tab: 0,
    subtab: 0
  });
  const changeTab = (tabIndex, subTabIndex = 0) => {
    setSelectedTab({ tab: tabIndex, subtab: subTabIndex });
  };

  const selectedTabData = TABS.find(
    (item) => item.id === selectedTab.tab
  ).subTabs.find((item) => item.id === selectedTab.subtab);

  return (
    <div className="tab-container">
      <div style={{ width: "max-cntent" }}>
        <SideBar selectedTab={selectedTab} tabs={TABS} changeTab={changeTab} />
      </div>
      <div>
        <TabContent tabData={selectedTabData} />
      </div>
    </div>
  );
};

export default TabContainer;
