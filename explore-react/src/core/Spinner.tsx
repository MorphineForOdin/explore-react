export default function Spinner({ size = 'block' }) {
    const getModifier = () => {
        switch (size) {
            case 'global': return 'spinner__lg';
            case 'inline': return 'spinner__sm';
            default: return 'spinner__md';
        }
    }

    return (
        <div className={`spinner ${getModifier()}`}>
            <div className="spinner--ring spinner--ring__out"></div>
            <div className="spinner--ring spinner--ring__mid"></div>
            <div className="spinner--ring spinner--ring__inn"></div>
        </div>
    );
}