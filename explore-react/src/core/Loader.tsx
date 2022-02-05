export default function Loader() {
    return (
        <div id="fullScreenLoader">
            <div className="spinner-double-ring-container">
                <div className="spinner-double-ring">
                    <div className="spinner-ring spinner-outer-ring"></div>
                    <div className="spinner-ring spinner-center-ring"></div>
                    <div className="spinner-ring spinner-inner-ring"></div>
                </div>
            </div>
        </div>
    );
}