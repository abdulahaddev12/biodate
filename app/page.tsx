
"use client";

import { useState } from "react";

type Detail = [label: string, value: string];

export default function Home() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const personalDetails: Detail[] = [
    ["Full Name", "ABDUL AHAD"],
    ["Date of Birth", "01-12-1999"],
    ["Place of Birth", "Chandpur"],
    ["Height", '5\' 6"'],
    ["Complexion", "Brown"],
    ["Blood Group", "B+"],
    ["Religion", "Islam"],
    ["Marital Status", "Single"],
  ];

  const educationDetails: Detail[] = [
    ["Education", "Kamil (Hadith)"],
    ["Institute", "Nischintapur D.S. Islamia Kamil Madrasah"],
    ["Occupation", "Small Business"],
    ["Work Location", "Mirpur-10, Dhaka"],
  ];

  const familyDetails: Detail[] = [
    ["Father's Name", "Md. Nurul Islam"],
    ["Father's Occupation", "Farmer"],
    ["Mother's Name", "Shamsun Nahar"],
    ["Mother's Occupation", "Homemaker"],
  ];

  const siblings: Detail[] = [
    ["Elder Brother", "Farmer, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Elder Brother", "Job Holder, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Elder Sister", "Homemaker, Married"],
    ["Younger Sister", "Student (B.Sc. in CSE), Unmarried"],
  ];

  const contactDetails: Detail[] = [
    ["Contact Person", "Self"],
    ["Phone Number", "+880 1580 603022"],
    ["Email Address", "devs.abdulahad@gmail.com"],
  ];

  function toggleRow(rowId: string) {
    setSelectedRow((current) => (current === rowId ? null : rowId));
  }

  function renderRows(details: Detail[], section: string) {
    return details.map(([label, value], index) => {
      const rowId = `${section}-${index}`;

      return (
        <div
          key={rowId}
          className={`row ${
            selectedRow === rowId ? "clicked-highlight" : ""
          }`}
          onClick={() => toggleRow(rowId)}
        >
          <div className="cell label">{label}</div>
          <div className="cell value">{value}</div>
        </div>
      );
    });
  }

  function renderSection(
    title: string,
    details: Detail[],
    section: string
  ) {
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

      {renderSection(
        "1. Personal Details",
        personalDetails,
        "personal"
      )}

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
          onClick={() => toggleRow("siblings-details")}
        >
          <div className="cell label">Siblings Details</div>

          <div className="cell value">
            <ul className="siblings-list">
              {siblings.map(([relation, details], index) => (
                <li key={`sibling-${index}`}>
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
          onClick={() => toggleRow("siblings-count")}
        >
          <div className="cell label">Siblings</div>
          <div className="cell value">2 Brothers, 4 Sisters</div>
        </div>

        <div
          className={`row ${
            selectedRow === "address" ? "clicked-highlight" : ""
          }`}
          onClick={() => toggleRow("address")}
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
