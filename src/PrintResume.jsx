function PrintResume({ contact, education, experience }) {
    return (<main className="printResume">
        <ResumeHeader contact={contact}/>
        <ResumeSection items={education} sectionTitle={"Education"} />
        <ResumeSection items={experience} sectionTitle="Professional Experience" />
    </main>);
}

function ResumeHeader({contact}) {
    let contactArray = Object.keys(contact).map((key) => [key, contact[key]]).filter((item) => (item[0] != "firstName") && (item[0] != "lastName"));
    let contactSubarray = [];
    for (let i = 0; i < contactArray.length; i++) {
        let pushVal = contactArray[i][1];
        if (i !== contactArray.length - 1) {
            pushVal += " | ";
        }
        contactSubarray.push(<span className="resumeContactSubitem">{pushVal}</span>);
    }
    return (<div className="resumeHeader">
            <h1><strong>{`${contact.firstName} ${contact.lastName}`} </strong></h1>
            <span className="resumeHeaderInfo">
                {contactSubarray}
            </span>
            <hr />
        </div>
    );
}

function ResumeSection({items, sectionTitle}) {
    return (<h2>
        <strong>{sectionTitle}</strong>
        <hr />
        {items.map((item) => (<ResumeSubsection item={item} />))}
    </h2>);
}

function ResumeSubsection({item}) {
    return (<div className="resumeSubsection">
        <LeftSubsection item={item} />
        <RightSubseciton item={item} />
    </div>);
}

function LeftSubsection({ item }) {
    let descriptionMap = item.description.split(/\r?\n/);
    return (<div className="leftSubsection">
        <h3 className="subsectionTitle"><strong>{item.name}</strong></h3>
        <span className="subsectionField"><em>{item.field}</em></span>
        <ul className="bullets">
            {descriptionMap.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>);
}

function RightSubseciton({item}) {
    return (<div className="rightSubsection">
        <div className="date">
            <strong>
                {item.startDate}
                {!item.onGoing ? `-${item.endDate}` : ""}
            </strong>
        </div>
        <div className="location">
            <em>{item.location}</em>
        </div>
    </div>);
}

export default PrintResume;