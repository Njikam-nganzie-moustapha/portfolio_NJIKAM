import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={`relative px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          language === 'fr' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {language === 'fr' && (
          <motion.div
            layoutId="languageIndicator"
            className="absolute inset-0 bg-primary rounded-md"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">FR</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="languageIndicator"
            className="absolute inset-0 bg-primary rounded-md"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
