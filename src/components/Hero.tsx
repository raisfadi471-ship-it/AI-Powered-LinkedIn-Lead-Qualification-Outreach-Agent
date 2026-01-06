'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Zap, Target, MessageSquareCode, ShieldCheck } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-blue-400 font-medium text-sm">
                        <Zap size={16} />
                        Next-Gen LinkedIn Automation
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        AI-Powered LinkedIn <br />
                        <span className="text-gradient">Lead Qualification</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Scale your outreach without sacrificing quality. High-intent focus, AI-driven scoring, and hyper-personalized messaging.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
                        {[
                            {
                                icon: <Target className="text-blue-500" />,
                                title: "Smart Scoring",
                                desc: "AI filters results to find only high-intent leads that match your ICP."
                            },
                            {
                                icon: <MessageSquareCode className="text-indigo-500" />,
                                title: "Contextual Outreach",
                                desc: "Extracts profile & post context for non-salesy, personal DMs."
                            },
                            {
                                icon: <ShieldCheck className="text-cyan-500" />,
                                title: "Human in the Loop",
                                desc: "Full control over every message before it gets sent."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="p-6 rounded-xl glass hover:border-blue-500/50 transition-colors"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
