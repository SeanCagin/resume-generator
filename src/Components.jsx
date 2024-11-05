import { defaultContact, defaultEducation, defaultExperience } from "./DefaultResume";
import { useState } from "react";
import trashIcon from "/delete.svg";
import expandIcon from "/expand.svg";
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
        contactArr.push(<InputField title={key} location={key} changeHandler={handlers.changeContact} value={contact[key]} key={key} />);
    }
    for (let i = 0; i < education.length; i++) {
        educationArr.push(<ExpandField item={education[i]} changeHandler={handlers.changeEducation} removeHandler={handlers.removeEducation} index={i} expandedIndex={expandedEducation} expandedHandler={handlers.chooseEducation} key={education[i].name} />);
    }
    for (let i = 0; i < experience.length; i++) {
        experienceArr.push(<ExpandField item={experience[i]} changeHandler={handlers.changeExperience} removeHandler={handlers.removeExperience} index={i} expandedIndex={expandedExperience} expandedHandler={handlers.chooseExperience} key={experience[i].name} />);
    }

    return (<>
        <h2>
            Contact Information
            {contactArr}
        </h2>
        <h2>
            Education
            {educationArr}
            <button className="addButton" onClick={handlers.addEducation}>Add Education</button>
        </h2>
        <h2>
            Experience
            {experienceArr}
            <button className="addButton" onClick={handlers.addExperience}>Add Experience</button>
        </h2>
    </>);
}

function InputField({title, changeHandler, value}) {
    return (<div className="input-group">
        <label htmlFor={location + value}>{title}</label>
        <input 
            id={location + value}  
            onChange={(e) => {changeHandler(e, title);}} 
            value={value}
        />
    </div>)
}

function ExpandField({item, index, changeHandler, removeHandler, expandedIndex, expandedHandler}) {
    let expanded = index === expandedIndex;
    function modifiedChangeHandler(e, changedField) {
        changeHandler(e, index, changedField);
    }
    if (!expanded) {
        return (
            <div className="contractedList">
                <div className="contractedListTitle">{item.name} | {item.field}</div>
                <div className="contractedListImages">
                    <img src={trashIcon} alt="delete field" onClick={() => {
                        removeHandler();
                    }} />
                    <img src={expandIcon} alt="expand field" onClick={() => {
                        expandedHandler(index);
                    }}/>
                </div>
            </div>
        );
    } else {
        let fieldArr = [];
        for (const key in item) {
            fieldArr.push(<InputField title={key} changeHandler={modifiedChangeHandler} value={item[key]} />);
        }
        return (
            <div className="expandedList">
                {fieldArr}
            </div>
        );
    }
}

function getHandlers(contact, education, experience,
     updateContact, updateEduction, updateExperience, updateExpandedEducation, updateExpandedExperience) {
    return {
        changeContact(e, field) {
            let newArr = structuredClone(contact);
            newArr[field] = e.target.value;
            updateContact(newArr);
        },
        changeEducation(e, index, fieldName) {
            let newArr = cloneObjectArray(education);
            newArr[index][fieldName] = e.target.value;
            updateEduction(newArr);
        },
        changeExperience(e, index, fieldName) {
            let newArr = cloneObjectArray(education);
            newArr[index][fieldName] = e.target.value;
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
            newArr.push({});
            updateEduction(newArr);
        },
        addExperience() {
            let newArr = cloneObjectArray(experience);
            newArr.push({});
            updateEduction(newArr);
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

export {Resume};