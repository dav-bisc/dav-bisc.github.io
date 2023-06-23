import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function ContactDetails(fullName,email,phone) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <details open={isDetailsOpen}>
      <summary onClick={toggleDetails}>{t('contacts.info1')}</summary>
      <div>
        <p>{t('contacts.name')}: {fullName}</p>
        <p>Email: {email}</p>
        <p>{t('phone')}: {phone}</p>
      </div>
    </details>
  );
}

export default ContactDetails;
