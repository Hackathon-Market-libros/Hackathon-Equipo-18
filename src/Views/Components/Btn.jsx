import '../Styles/btn.css';

const Btn = (props) => {
    const {onToggle} = props;
    return(
        <div>
            <button onClick={() => onToggle()} className="svgContainer">
                <svg viewBox="0 0 100 80" className="svgNav">
                    <rect width="90" height="10" />
                    <rect y="30" width="90" height="10" />
                    <rect y="60" width="90" height="10" />
                </svg>
            </button>
        </div>
    );
}

export default Btn;