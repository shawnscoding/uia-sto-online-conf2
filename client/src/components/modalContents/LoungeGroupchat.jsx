import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { iframeWidth } from "../../styledComponent/Variables";
import { useDispatch, connect } from "react-redux";
import { storeStamp } from "../../utils/helper";
import { authrizationFailed } from "../../redux/auth/actions";
import { CLOSE_UPRISM_GUIDE } from "../../redux/types";
import { detectCookieForGuide } from "./../../utils/helper";
import { OPEN_UPRISM_GUIDE } from "./../../redux/types";
import RESOURCE from "./../../utils/imgs-1010/imgs";

// this is used globally
const LoungeGroupchat = () => {
  const [noGuideAgainChecked, setchecked] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const body = { stamp_code: "LOU-01" };
    const logUserOut = () => dispatch(authrizationFailed());
    storeStamp({ logUserOut, body });
  }, []);

  useEffect(() => {
    const open = detectCookieForGuide();
    if (open) {
      dispatch({
        type: OPEN_UPRISM_GUIDE,
      });
    }
  }, []);

  // const closeGuide = () => {
  //   if (noGuideAgainChecked) {
  //     document.cookie = "test=test";
  //     document.cookie = "guideOpen=false";
  //     console.log("document cookies ::", document.cookie);
  //   }

  //   dispatch({
  //     type: CLOSE_UPRISM_GUIDE,
  //   });
  // };

  // const onChange = () => {
  //   setchecked(!noGuideAgainChecked);
  // };
  return (
    <React.Fragment>
      {/* {renderGuide && (
        <div className="uprism_guide">
          <img
            src="https://d2lx5o5tt1uoj2.cloudfront.net/assets/uprism_guide.png"
            alt=""
            className="pc"
          />
          <img
            src="https://d2lx5o5tt1uoj2.cloudfront.net/assets/m_uprism_guide.png"
            alt=""
            className="mobile"
          />
          <p className="check-box">
            <label className="checks2">
              <input
                onChange={onChange}
                checked={noGuideAgainChecked}
                type="checkbox"
              />
              <span className="checkbox-txt">Do Not Open Again</span>
            </label>
            <button type="button" onClick={closeGuide}>
              Close
            </button>
          </p>
        </div>
      )} */}
      <img
        style={{
          width: iframeWidth,
          height: "700px",
        }}
        // frameBorder="0"
        src={RESOURCE.lounge_group_chat}
        alt=""
        // allow="camera; microphone; autoplay; fullscreen"
        // allowFullScreen
      ></img>
    </React.Fragment>
  );
};

LoungeGroupchat.propTypes = {};

const mapStateToProps = (state) => ({
  renderGuide: state.opener.renderGuide,
});

export default connect(mapStateToProps)(LoungeGroupchat);
