
import Images from '../../assets/Images'
import Icons from '../../assets/Icons'

const Index = ({ id, parent, options }) => {


    return (
        <div
            className="actiondropdown-main"
            id={`actiondropdown-main-${id}`}
        >
            <div className="actiondropdown-button"
                dangerouslySetInnerHTML={{ __html: Icons.default.option_verti }}
            ></div>
            <div className="actiondropdown-dropdown">
                <div className="dropdown-items">
                    {options?.map((option, idx) => (
                        <div
                            key={`actiondropdown-${id}-${idx}`}
                            className="dropdown-item"
                            onClick={(e) => option.callback(e, parent)}
                        >
                            {option.icon &&
                                <div
                                    className="dropdown-item-icon"
                                    dangerouslySetInnerHTML={{ __html: option.icon }}
                                ></div>
                            }
                            <div className="dropdown-item-label">{option.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Index;