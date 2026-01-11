import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative max-w-4xl mx-auto mt-12 mb-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 shadow-glow group cursor-pointer"
                onClick={() => setIsPlaying(true)}
            >
                <AnimatePresence mode="wait">
                    {!isPlaying ? (
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-10"
                        >
                            {/* Thumbnail */}
                            <img
                                src="https://img.youtube.com/vi/XtKQstMFSA0/maxresdefault.jpg"
                                alt="Video Preview"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">

                                {/* Play Button Container */}
                                <div className="relative">
                                    {/* Outer Glow/Pulse */}
                                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse scale-150" />

                                    {/* Glass Play Button */}
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                                    </div>
                                </div>

                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                                <p className="text-white font-display font-medium text-base md:text-lg drop-shadow-md">
                                    Clique para assistir o vídeo explicativo
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="video"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-black"
                        >
                            <iframe
                                src="https://www.youtube.com/embed/XtKQstMFSA0?autoplay=1"
                                title="InFlow Video Presentation"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
