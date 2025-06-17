import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Créateur d\'expériences numériques exceptionnelles',
    'hero.cta': 'Découvrir mon travail',
    'about.title': 'À propos de moi',
    'projects.title': 'Mes Projets',
    'skills.title': 'Compétences',
    'services.title': 'Services',
    'contact.title': 'Contactez-moi',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'footer.rights': 'Tous droits réservés'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Creator of exceptional digital experiences',
    'hero.cta': 'Discover my work',
    'about.title': 'About me',
    'projects.title': 'My Projects',
    'skills.title': 'Skills',
    'services.title': 'Services',
    'contact.title': 'Contact me',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'footer.rights': 'All rights reserved'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
