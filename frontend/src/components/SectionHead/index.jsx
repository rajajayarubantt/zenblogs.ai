import React from "react";

/*Assets*/
import Icons from "../../assets/Icons";

/*Components*/
import Buttons from "../Buttons";

const Index = ({ title = "", info = "", actions = [] }) => {

    return (
        <div className="section-head-main">
            <div className="head-title">
                {title}
                {info &&
                    <div className="head-info-main">
                        <div className="info-icon" dangerouslySetInnerHTML={{ __html: Icons.default.info }}></div>
                        <div className="info-tooltip">{info}</div>
                    </div>
                }
            </div>

            <div className="head-right">
                {actions.length > 0 &&
                    <div className="head-actions">
                        {actions?.map((action, idx) => <Buttons {...action} />)}
                    </div>
                }


            </div>
        </div>
    )

}

export default Index;