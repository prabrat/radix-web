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
      pdfPath: '/forms/emergency-form.pdf',
      revision: 'rev 7/11/25',
    },
    {
      title: 'Medication Administration Authorization Form',
      description: <p>This is a State-required document to let our facility administer any required medication. <strong>ONLY VALID FOR ONE YEAR</strong></p>,
      pdfPath: '/forms/med-admin.pdf',
      revision: 'rev 7/11/25',
    },
    {
      title: 'Allergy and Anaphylaxis - Medication Administration Authorization Plan',
      description: <p>This is a State-required document to let our facility follow the plan and administer any Allergy and Anaphylaxis Medication. <strong>ONLY VALID FOR ONE YEAR</strong></p>,
      pdfPath: '/forms/allergy-anaphylaxis.pdf',
      revision: 'rev 7/11/25',
    },
    {
      title: 'Health Inventory Form',
      description: 'This is a State-required Health Assessment Form.',
      pdfPath: '/forms/health-form.pdf',
      revision: 'rev 7/11/25',
    },

    {
      title: "Social Media Release Consent Form", 
      description: 'This is a Social Media Release Form that gives or denies Radix Childcare the consent to post any photos of your child/children on our Social Media Pages.', 
      pdfPath: '/forms/social-media-release.pdf', 
      revision: 'rev 7/11/25'
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
