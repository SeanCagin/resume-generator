import { defaultContact, defaultEducation, defaultExperience } from "./DefaultResume";
import PrintResume from "./PrintResume";
import { useState } from "react";
import trashIcon from "/delete.svg";
import expandIcon from "/expand.svg";
import contractIcon from "/contract.svg";
import printIcon from "/print.svg"
import Switch from "react-switch";
import addCircleIcon from "/add-circle.svg";
import githubIcon from "/github.svg"
import "./styles.css"


function Resume() {
    const [contact, updateContact] = useState(defaultContact);
    const [education, updateEduction] = useState(defaultEducation);
    const [experience, updateExperience] = useState(defaultExperience);
    const [expandedEducation, changeExpandedEducation] = useState(-1);
    const [expandedExperience, changeExpandedExperience] = useState(-1);
    

    let handlers = getHandlers(contact, education, experience, updateContact, updateEduction, updateExperience, changeExpandedEducation, changeExpandedExperience);

    let contactArr = [];
    let educationArr = [];
    let experienceArr = [];
    for (const key in contact) {
        contactArr.push(<InputField title={fieldToName[key]} codeName={key} location={key} changeHandler={handlers.changeContact} value={contact[key]} key={key} />);
    }
    for (let i = 0; i < education.length; i++) {
        educationArr.push(<ExpandField item={education[i]} changeHandler={handlers.changeEducation} removeHandler={handlers.removeEducation} index={i} expandedIndex={expandedEducation} expandedHandler={handlers.chooseEducation} key={education[i].id} />);
    }
    for (let i = 0; i < experience.length; i++) {
        experienceArr.push(<ExpandField item={experience[i]} changeHandler={handlers.changeExperience} removeHandler={handlers.removeExperience} index={i} expandedIndex={expandedExperience} expandedHandler={handlers.chooseExperience} key={experience[i].id} />);
    }

    return (<>
    <div className="page">
        <div className="controls noPrint scroll">
            <div className="contactInfo">
                <h2>Contact Information</h2>
                <hr />
                {contactArr}
            </div>
            <div className="nonContactControl">
                <div className="sectionHeader">
                    <h2>Education</h2>
                    <img src={addCircleIcon} onClick={handlers.addEducation} />
                    {/* <button className="addButton" onClick={handlers.addEducation}><img src={addIcon}/></button> */}
                </div>
                <hr />
                {educationArr}
            </div>
            <div className="nonContactControl">
                <div className="sectionHeader">
                    <h2>Experience</h2>
                    <img src={addCircleIcon} onClick={handlers.addExperience} />
                    {/* <button className="addButton" onClick={handlers.addExperience}><img src={addIcon}/></button> */}
                </div>
                <hr />
                {experienceArr}
            </div>
        </div>
        <div className="resumeHolder">
            <PrintResume contact={contact} education={education} experience={experience} />
            <div className="metaButtons noPrint">
                <img src={printIcon} onClick={window.print} className="meta" />
                <a href="https://github.com/SeanCagin/resume-generator" className="plug"><img className="meta" src={githubIcon}/></a>
            </div>
        </div>
    </div>
    </>);
}

function InputField({title, codeName, changeHandler, value}) {
    return (<div className="input-group" onClick={ (e) => {
        if (e.target.classList.contains("input-group")) {
            e.target.childNodes[0].click();
        }
    }}>
        <label>
            <div>{title}</div>
                {codeName !== "description" ? (<input
                    onChange={(e) => {changeHandler(e, codeName);}} 
                    value={value}
                    autoFocus
                />) : <textarea onChange={(e) => {changeHandler(e, codeName);}} 
                        value={value}
                        autoFocus />
            }

        </label>
    </div>)
}

function CustomSwitch({checked, changeFunc}) {
    return (
        <div className="onGoingField">
            <span>Ongiong: </span>
            <Switch checked={checked} onChange={(checked) => {changeFunc(checked, "onGoing")}} width={36} height={18} uncheckedIcon={false} checkedIcon={false} onColor="#fff" onHandleColor="#000" offHandleColor="#000"/>
        </div>
    );
}


function ExpandField({item, index, changeHandler, removeHandler, expandedIndex, expandedHandler}) {
    let expanded = index === expandedIndex;
    function modifiedChangeHandler(e, changedField) {
        changeHandler(e, index, changedField);
    }
    let content = (
        <div className="contractedList">
            <div className="contractedListTitle">{item.name} | {item.field}</div>
            <div className="contractedListImages">
                <img src={trashIcon} alt="delete field" onClick={() => {
                    removeHandler(index);
                }} />
                {index == expandedIndex ? 
                    <img src={contractIcon} alt="contract field" onClick={() => {
                        expandedHandler("-1");
                    }}/> :
                    <img src={expandIcon} alt="expand field" onClick={() => {
                        expandedHandler(index);
                    }}/>}
            </div>
        </div>
    );

    if (expanded) {
        let fieldArr = [];
        for (const key in item) {
            if (key != "id" && key != "onGoing") {
                fieldArr.push(<InputField title={fieldToName[key]} codeName={key} changeHandler={modifiedChangeHandler} value={item[key]} key={key} />);
            } else if (key == "onGoing") {
                fieldArr.push(<CustomSwitch checked={item[key] === true} changeFunc={modifiedChangeHandler} key="onGoing" />);
            }
        }
        content = (
            <>
                <div className="expandedListHeader">{content}</div>
                <div className="expandedList">
                    {fieldArr}
                </div>
            </>
        );
    }

    return content;
}

function getHandlers(contact, education, experience, 
     updateContact, updateEduction, updateExperience, updateExpandedEducation, updateExpandedExperience) {
    return {
        changeContact(e, field) {
            let newArr = structuredClone(contact);
            newArr[field] = e.target.value;
            updateContact(newArr);
        },
        changeEducation(e, index, field) {
            let newArr = cloneObjectArray(education);
            if (e === true || e === false) {
                newArr[index][field] = e;
            } else {
                newArr[index][field] = e.target.value;
            }
            updateEduction(newArr);
        },
        changeExperience(e, index, field) {
            let newArr = cloneObjectArray(experience);
            if (e === true || e === false) {
                newArr[index][field] = e;
            } else {
                newArr[index][field] = e.target.value;
            }
            updateExperience(newArr);
        },
        removeEducation(index) {
            let newArr = cloneObjectArray(education);
            newArr.splice(index, 1);
            updateEduction(newArr);
        },
        removeExperience(index) {
            let newArr = cloneObjectArray(experience);
            newArr.splice(index, 1);
            updateEduction(newArr);
        },
        addEducation() {
            let newArr = cloneObjectArray(education);
            newArr.push(getEmptySubsection());
            updateEduction(newArr);
            updateExpandedEducation(newArr.length - 1);
        },
        addExperience() {
            let newArr = cloneObjectArray(experience);
            newArr.push(getEmptySubsection());
            updateExperience(newArr);
            updateExpandedExperience(newArr.length - 1);
        },
        chooseEducation(index) {
            updateExpandedEducation(index);
        },
        chooseExperience(index) {
            updateExpandedExperience(index);
        },
    };
}

function cloneObjectArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(structuredClone(arr[i]));
    }
    return newArr;
}

function getEmptySubsection() {
    return {
        name: "",
        field: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        onGoing: false,
        id: makeId(),
    }
}

function makeId(){
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}


const fieldToName = {
    firstName: "First Name:",
    lastName: "Last Name:",
    location: "Address:",
    phone: "Phone #:",
    email: "Email:",
    linkedin: "LinkedIn:",
    github: "GitHub:",
    name: "Name:",
    field: "Designation:",
    startDate: "Start Date:",
    endDate: "End Date:",
    description: "Desicription:",
}

export {Resume};