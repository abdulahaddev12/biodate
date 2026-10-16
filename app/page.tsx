
"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [selectedRow, setSelectedRow] = useState(null);

  const personalDetails = [
    ["Full Name", "ABDUL AHAD"],
    ["Date of Birth", "01-12-1999"],
    ["Place of Birth", "Chandpur"],
    ["Height", "5' 6\""],
    ["Complexion", "Brown"],
    ["Blood Group", "B+"],
    ["Religion", "Islam"],
    ["Marital Status", "Single"],
  ];

  const educationDetails = [
    ["Education", "Kamil (Hadith)"],
    ["Institute", "Nischintapur D.S. Islamia Kamil Madrasah"],
    ["Occupation", "Small Business"],
    ["Work Location", "Mirpur-10, Dhaka"],
  ];

  const familyDetails = [
    ["Father's Name", "Md. Nurul Islam"],
    ["Father's Occupation", "Farmer"],
    ["Mother's Name", "Shamsun Nahar"],
    ["Mother's Occupation", "Homemaker"],
  ];

  const siblings = [
    ["Elder Brother", "Farmer, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Elder Brother", "Job Holder, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Younger Sister", "Student (B.Sc. in CSE), Unmarried"],
  ];

  const contactDetails = [
    ["Contact Person", "Self"],
    ["Phone Number", "+880 1580 603022"],
    ["Email Address", "devs.abdulahad@gmail.com"],
  ];

  function renderRows(details, section) {
    return details.map(([label, value], index) => {
      const rowId = `${section}-${index}`;

      return (
        <div
          key={rowId}
          className={`row ${
            selectedRow === rowId ? "clicked-highlight" : ""
          }`}
          onClick={() =>
            setSelectedRow(selectedRow === rowId ? null : rowId)
          }
        >
          <div className="cell label">{label}</div>
          <div className="cell value">{value}</div>
        </div>
      );
    });
  }

  function renderSection(title, details, section) {
    return (
      <>
        <div className="section-title">{title}</div>
        <div className="biodata-list">
          {renderRows(details, section)}
        </div>
      </>
    );
  }

  return (
    <main className="container">
      <header className="header">
        <h1>BIODATA</h1>
        <p>Personal Profile &amp; Family Details</p>
      </header>

      {renderSection("1. Personal Details", personalDetails, "personal")}

      {renderSection(
        "2. Educational & Professional Details",
        educationDetails,
        "education"
      )}

      <div className="section-title">3. Family Background</div>

      <div className="biodata-list">
        {renderRows(familyDetails, "family")}

        <div
          className={`row ${
            selectedRow === "siblings-details"
              ? "clicked-highlight"
              : ""
          }`}
          onClick={() =>
            setSelectedRow(
              selectedRow === "siblings-details"
                ? null
                : "siblings-details"
            )
          }
        >
          <div className="cell label">Siblings Details</div>

          <div className="cell value">
            <ul className="siblings-list">
              {siblings.map(([relation, details], index) => (
                <li key={index}>
                  <strong>{relation}:</strong> {details}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`row ${
            selectedRow === "siblings-count"
              ? "clicked-highlight"
              : ""
          }`}
          onClick={() =>
            setSelectedRow(
              selectedRow === "siblings-count" ? null : "siblings-count"
            )
          }
        >
          <div className="cell label">Siblings</div>
          <div className="cell value">2 Brothers, 4 Sisters</div>
        </div>

        <div
          className={`row ${
            selectedRow === "address" ? "clicked-highlight" : ""
          }`}
          onClick={() =>
            setSelectedRow(selectedRow === "address" ? null : "address")
          }
        >
          <div className="cell label">Permanent Address</div>
          <div className="cell value">
            Village: <strong>Dojana</strong>, Post Office:{" "}
            <strong>Golbahar</strong>, Upazila:{" "}
            <strong>Kachua</strong>, District:{" "}
            <strong>Chandpur</strong>
          </div>
        </div>
      </div>

      {renderSection(
        "4. Contact Information",
        contactDetails,
        "contact"
      )}
    </main>
  );
}
