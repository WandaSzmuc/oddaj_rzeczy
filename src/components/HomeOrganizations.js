import React from "react";
import decorator from "../assets/Decoration.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Fundations from "./HelpUnits/Fundations";
import Organizations from "./HelpUnits/Organizations";
import Local from "./HelpUnits/Local";

export default function HomeOrganizations() {
  return (
    <div id="organizations" className="organizations_section">
      <h1 className="organizations_section--heading">Komu pomagamy?</h1>
      <img src={decorator} className="organizations_section--decorator" />

      <div>
        <Tabs className="tabs_container">
          <TabList className="tab_list">
            <Tab className="tab_list--el">Fundacjom</Tab>
            <Tab className="tab_list--el">Organizacjom pozarządowym</Tab>
            <Tab className="tab_list--el">Lokalnym zbiórkom</Tab>
          </TabList>

          <TabPanel className="tab_panell">
            <div className="tab_panell--container">
              <div className="tab_description">
                Tutaj jest opis fundacji bla bla bla , which is constantly under
                attack by Bowser. She often plays the damsel in distress role
                within the series and is the lead female.
              </div>
              <div className="pagination_container">
                {" "}
                <Fundations />
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tab_panell">
            <div className="tab_panell--container">
              <div className="tab_description">
                Tutaj jest opis organizacji b , which is constantly under attack
                by Bowser. She often plays the damsel in distress role within
                the series and is the lead female.
              </div>
              <div className="pagination_container">
                {" "}
                <Organizations />
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tab_panell">
            <div className="tab_panell--container">
              <div className="tab_description">
                Tutaj jest opis lokalnych zbiórek , which is constantly under
                attack by Bowser. She often plays the damsel in distress role
                within the series and is the lead female.
              </div>
              <div className="pagination_container">
                <Local />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
