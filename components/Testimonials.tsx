import React from 'react';
import { ArrowLeft, ArrowRight, Twitter, Linkedin } from 'lucide-react';
import Tooltip from './Tooltip';

const Testimonials: React.FC = () => {
  const testimonial = {
    text: "The agency is passionate about helping clients navigate the complex processes of regulatory compliance and achieve their business goals. Thrive has an experienced team of consultants who work closely with clients.",
    author: "Andrew Jameson",
    role: "Product Owner at Volkswagen",
    company: "Volkswagen"
  };

  const shareText = encodeURIComponent(`"${testimonial.text}" - ${testimonial.author}, ${testimonial.company}`);
  const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';

  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Header */}
        <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs text-gray-300 mb-6">
               <span>📣</span> What they said
            </div>
            <h3 className="text-4xl font-bold mb-6">
                Our Beloved <br/> <span className="text-purple-500">Customer</span>
            </h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                With our expertise and dedication, we are committed to delivering exceptional services that meet your unique needs.
            </p>
            <Tooltip content="Join our happy clients">
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-md text-sm transition-all shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
                    Start Your Project
                </button>
            </Tooltip>
        </div>

        {/* Right Side: Card */}
        <div className="md:col-span-7">
            <div className="relative bg-slate-900 rounded-3xl p-10 border border-white/10 shadow-2xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-serif">"</div>
                
                <h4 className="text-xl font-bold text-purple-400 mb-4">{testimonial.company}</h4>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-6 gap-4">
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://picsum.photos/50/50" 
                            alt={testimonial.author} 
                            className="w-10 h-10 rounded-full border border-white/20"
                        />
                        <div>
                            <div className="text-sm font-bold text-white">{testimonial.author}</div>
                            <div className="text-xs text-gray-500">{testimonial.role}</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                        {/* Share Buttons */}
                        <div className="flex gap-2 border-r border-white/10 pr-4">
                            <Tooltip content="Share on Twitter">
                                <a 
                                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-white/10 hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110 flex items-center justify-center group"
                                    aria-label="Share testimonial on Twitter"
                                >
                                    <Twitter className="w-4 h-4 text-gray-400 group-hover:text-sky-400" />
                                </a>
                            </Tooltip>
                            <Tooltip content="Share on LinkedIn">
                                <a 
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-white/10 hover:bg-blue-600/20 hover:text-blue-500 hover:border-blue-500/50 transition-all hover:scale-110 flex items-center justify-center group"
                                    aria-label="Share testimonial on LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                </a>
                            </Tooltip>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-2">
                            <Tooltip content="Previous review">
                                <button className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/10" aria-label="Previous testimonial">
                                    <ArrowLeft className="w-4 h-4 text-gray-400" />
                                </button>
                            </Tooltip>
                            <Tooltip content="Next review">
                                <button className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/10" aria-label="Next testimonial">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;