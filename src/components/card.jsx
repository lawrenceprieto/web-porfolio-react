function Card(props) {
    return (
        <>
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                    <img src={props.thumbnail} className="card-img" alt={props.title} />
                    <div className="card-img-overlay">
                        <button className="display-modal" onClick={props.modal}><span>View</span></button>
                        {/* <button className="display-offcanvas" onClick={props.offcanvas}><span>View</span></button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card