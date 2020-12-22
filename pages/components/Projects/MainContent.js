import React from "react";

// Import all project components
import DM from "./DM";
import MixSpaceCloudPlatform from "./MixSpaceCloudPlatform";
import MXSSO from "./MXSSO";
import MXOut from "./MXOut";
import KuTumbaFCLanding from "./KFCLanding";
import KuTumbaFCEcommerce from "./KFCEcom";
import KuTumbaFCCMS from "./KFCCMS";
import KuTumbaFCRESTAPI from "./KFCAPI";
import XStackPlatform from "./XStackPlatform";
import XStackHub from "./XStackHub";
import XStackStatus from "./XStackStatus";
import ElevateLanding from "./ElevateLanding";
import ElevateCfP from "./ElevateCfP";
import JailBird from "./JailBird";
import ClementineOS from "./ClementineOS";
import Cortex from "./Cortex";
import StretchInc from "./StretchInc";
import EMET from "./EMET";
import PayrollSystem from "./PayrollSystem";
import TheArchitectAkash from "./TheArchitectAkash";
import Calc from "./Calc";
import Credity from "./Credity";
import FringeMessenger from "./FringeMessenger";
import WE from "./WE";
import BlackBoxProject from "./BlackBoxProject";
import BlackHoseFileSystem from "./BFS";
import DHSOne from "./DHSOne";
import DHSOneWebsite from "./DHSOneWebsite";
import Flair2k19 from "./Flair2k19";
import Pattarai from "./Pattarai";
import Frecord from "./Frecord";
import RADAR from "./RADAR";
import Macey from "./Macey";
import MaceyWiki from "./MaceyWiki";
import FringeWebsite from "./FringeWebsite";
import SIH from "./SIH";
import NowMyWatchBegins from "./NowMyWatchBegins";
import LetUsBrush from "./LetUsBrush";
import YBSS from "./YBSS";
import GGBK from "./GGBK";
import Skyline from "./Skyline";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h4 className="d-block">Projects</h4>
          <h5 className="d-block text-grey">
            Here are some of the projects I've worked on.
          </h5>
          <div className="d-flex mt-3">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for a project"
            />
            <button className="search-icon">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div id="projects">
            <DM></DM>
            <MixSpaceCloudPlatform></MixSpaceCloudPlatform>
            <MXSSO></MXSSO>
            <MXOut></MXOut>
            <KuTumbaFCLanding></KuTumbaFCLanding>
            <KuTumbaFCEcommerce></KuTumbaFCEcommerce>
            <KuTumbaFCCMS></KuTumbaFCCMS>
            <KuTumbaFCRESTAPI></KuTumbaFCRESTAPI>
            <XStackPlatform></XStackPlatform>
            <XStackHub></XStackHub>
            <XStackStatus></XStackStatus>
            <JailBird></JailBird>
            <ElevateLanding></ElevateLanding>
            <ElevateCfP></ElevateCfP>
            <ClementineOS></ClementineOS>
            <Cortex></Cortex>
            <StretchInc></StretchInc>
            <EMET></EMET>
            <PayrollSystem></PayrollSystem>
            <TheArchitectAkash></TheArchitectAkash>
            <Calc></Calc>
            <Credity></Credity>
            <FringeMessenger></FringeMessenger>
            <FringeWebsite></FringeWebsite>
            <WE></WE>
            <BlackBoxProject></BlackBoxProject>
            <BlackHoseFileSystem></BlackHoseFileSystem>
            <DHSOne></DHSOne>
            <DHSOneWebsite></DHSOneWebsite>
            <Flair2k19></Flair2k19>
            <Pattarai></Pattarai>
            <Frecord></Frecord>
            <RADAR></RADAR>
            <Macey></Macey>
            <MaceyWiki></MaceyWiki>
            <SIH></SIH>
            <NowMyWatchBegins></NowMyWatchBegins>
            <LetUsBrush></LetUsBrush>
            <YBSS></YBSS>
            <GGBK></GGBK>
            <Skyline></Skyline>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
