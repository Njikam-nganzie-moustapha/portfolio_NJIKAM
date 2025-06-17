import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo, socialLinks } from '../config/portfolio';
import { useLanguage } from '../contexts/LanguageContext';
import SocialIcon from '../components/ui/SocialIcon';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=160&background=6366f1&color=ffffff`;
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary font-semibold mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Télécharger CV
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="sr-only">{social.name}</span>
                <SocialIcon name={social.icon} className="w-6 h-6 group-hover:opacity-100 opacity-70" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <SocialIcon name="location" className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <SocialIcon name="email" className="w-5 h-5" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <SocialIcon name="phone" className="w-5 h-5" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
