import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills, services } from '../config/portfolio';
import ServiceIcon from '../components/ui/ServiceIcon';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillCategories = ['frontend', 'backend', 'design', 'marketing', 'tools'] as const;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('skills.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category) => {
                const categorySkills = skills.filter(skill => skill.category === category);
                if (categorySkills.length === 0) return null;

                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-4 capitalize">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className="bg-primary h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('services.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <ServiceIcon name={service.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      {service.price && (
                        <p className="text-primary font-medium">{service.price}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
