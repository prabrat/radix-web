import React from 'react';
import pdfIcon from '../images/forms/pdf.png';
import downloadIcon from '../images/forms/adobe-download.png';
import FormsInfo from '../images/forms/forms.png';
import '../styles/forms.css';

const Forms = () => {
  const formsList = [
    {
      title: 'Emergency Form',
      description: 'This is a State-required document to let our facility know who to contact in the event of an emergency.',
      pdfPath: '/forms/test-emergency-form.pdf',
      revision: 'rev 3/23/24',
    },
    {
      title: 'Authorized Pick-Up',
      description: "Please fill out this form to add someone to your child's emergency card.",
      pdfPath: '/forms/test-AuthPUFF.pdf',
      revision: 'rev 3/23/24',
    },
    {
      title: 'One Time Pick-Up Form',
      description: <p>This form is for <strong>ONE-TIME USE ONLY</strong>.</p>,
      pdfPath: '/forms/test-OneTimePUF.pdf',
      revision: 'rev 3/23/24',
    },
    {
      title: 'Contract',
      description: 'Contact Form',
      pdfPath: '/forms/test-contract.pdf',
      revision: 'rev 3/23/24',
    },
  ];

  const alternatingColors = ['#ffffff', '#f0f0f0'];

  return (
    <div className="forms-container">
      <div className="forms-top">
        <img src={FormsInfo} alt="Forms Info" />
      </div>
      <div className="forms-header">
        <div className="adobe-notice">
          <p>
            You will need Adobe Acrobat Reader to fill out the .pdf forms online. If you do not have Adobe Acrobat Reader, please click the icon to the right to download a free version.
          </p>
          <a
            href="https://get.adobe.com/reader/"
            target="_blank"
            rel="noopener noreferrer"
            className="adobe-download"
          >
            <img src={downloadIcon} alt="Get Adobe Reader" />
          </a>
        </div>
      </div>

      <div className="forms-list">
        {formsList.map((form, index) => (
          <a
            href={form.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
            key={index}
          >
            <div
              className="form-item"
              style={{ backgroundColor: alternatingColors[index % alternatingColors.length] }}
            >
              <div className="form-content">
                <h2>{form.title}</h2>
                <p>{form.description}</p>
              </div>
              <div className="form-download">
                <img src={pdfIcon} alt="PDF Download" />
                <span className="revision">{form.revision}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Forms;
