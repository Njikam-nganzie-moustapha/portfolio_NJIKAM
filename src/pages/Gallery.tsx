import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryItem {
  id: string;
  title: string;
  category: 'design' | 'development' | 'photography' | 'branding';
  image: string;
  description: string;
}

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Example gallery items - replace with real data
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Interface E-commerce',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Design moderne pour une plateforme e-commerce'
    },
    {
      id: '2',
      title: 'Application Mobile',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Développement d\'une application mobile native'
    },
    {
      id: '3',
      title: 'Identité Visuelle',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Création d\'identité visuelle complète'
    },
    {
      id: '4',
      title: 'Site Web Responsive',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      description: 'Développement d\'un site web responsive'
    },
    {
      id: '5',
      title: 'Design System',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      description: 'Création d\'un design system complet'
    },
    {
      id: '6',
      title: 'Logo Design',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      description: 'Design de logo pour startup tech'
    },
    {
      id: '7',
      title: 'Dashboard Analytics',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Interface de dashboard avec analytics'
    },
    {
      id: '8',
      title: 'UI Kit Mobile',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
      description: 'Kit d\'interface utilisateur pour mobile'
    }
  ];

  const categories = ['all', 'design', 'development', 'branding', 'photography'];
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      all: 'Tout',
      design: 'Design',
      development: 'Développement',
      branding: 'Branding',
      photography: 'Photographie'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('nav.gallery')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une sélection de mes créations et réalisations
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const item = galleryItems.find(i => i.id === selectedItem);
                    if (!item) return null;

                    return (
                      <div>
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-96 object-cover"
                          />
                          <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-primary font-medium capitalize">
                              {item.category}
                            </span>
                          </div>

                          <h3 className="text-3xl font-bold text-foreground mb-4">
                            {item.title}
                          </h3>

                          <p className="text-muted-foreground text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucun élément trouvé
              </h3>
              <p className="text-muted-foreground">
                Aucun élément ne correspond à ce filtre.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
