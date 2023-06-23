import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
function ContactDetails(fullName,email,phone) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };
  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(t('contacts.subj'))}&body=${encodeURIComponent(t('contacts.body'))}`;
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(t('contacts.body'))}`;
  const phoneLink = `tel:${phone}`;

  return (
    <details open={isDetailsOpen}>
      <summary onClick={toggleDetails}>{t('contacts.info1')}</summary>
      <div>
        <p>{t('contacts.name')}: {fullName}</p>
        <a href={mailToLink} className="flex items-center justify-center text-blue-700"> <BiMailSend className='mr-2 text-xl'/> {t('contacts.emailProp')}</a>
        
        <a href={whatsappLink} className="flex items-center justify-center text-blue-700"> <BsWhatsapp className='text-green-600 mr-2 text-xl'/> {t('contacts.waProp')}</a>
        
        <a href={phoneLink} className="flex items-center justify-center text-blue-700"> <BsFillTelephoneFill className='mr-2 text-xl'/>  <p className='mr-2'>{t('contacts.phone')} </p> {phone} </a>
        
      </div>
    </details>
  );
}

export default ContactDetails;
