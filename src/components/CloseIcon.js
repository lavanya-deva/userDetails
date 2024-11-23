const CloseIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ cursor: 'pointer' }}
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <line
            x1="22"
            y1="2"
            x2="2"
            y2="22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export default CloseIcon;