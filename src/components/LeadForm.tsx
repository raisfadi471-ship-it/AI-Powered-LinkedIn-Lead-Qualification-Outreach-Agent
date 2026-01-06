'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendLeadToN8N } from '@/lib/n8n';
import { cn } from '@/lib/utils';

export default function LeadForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedin: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await sendLeadToN8N(formData);
            setStatus('success');
            setFormData({ name: '', email: '', linkedin: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-xl mx-auto p-8 rounded-2xl glass"
        >
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Get Early Access</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input
                        required
                        type="text"
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                        required
                        type="email"
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">LinkedIn Profile</label>
                    <input
                        required
                        type="url"
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Message (Optional)</label>
                    <textarea
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all h-24 resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your needs..."
                    />
                </div>

                <button
                    disabled={status === 'loading'}
                    type="submit"
                    className={cn(
                        "w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95",
                        status === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'
                    )}
                >
                    {status === 'loading' ? (
                        <Loader2 className="animate-spin" />
                    ) : status === 'success' ? (
                        <>
                            <CheckCircle2 size={20} />
                            Success!
                        </>
                    ) : status === 'error' ? (
                        <>
                            <AlertCircle size={20} />
                            Error. Try again?
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            Submit Details
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}
