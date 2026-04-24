import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/lib/LanguageContext';
import { submitLead } from '@/api/lead';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

const AREAS = [
  'Infraestrutura de TI', 'Cloud & DevOps', 'Segurança da Informação',
  'Business Intelligence', 'Automação e APIs', 'Inteligência Artificial',
  'Suporte & Monitoração', 'Governança & Compliance',
];

const WHATSAPP_NUMBER = '556631992858';

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    area: '',
    message: '',
  });

  // Rótulos traduzidos extraídos uma vez
  const labels = {
    contact: lang === 'pt' ? 'Fale conosco' : 'Contact',
    title: lang === 'pt' 
      ? { prefix: 'Vamos conversar sobre', highlight: 'seu projeto?' }
      : { prefix: 'Ready to talk about', highlight: 'your project?' },
    sent: lang === 'pt' ? 'Mensagem enviada!' : 'Message sent!',
    sentDesc: lang === 'pt' 
      ? 'Retornaremos em até 2 horas úteis. Ou fale agora no WhatsApp.' 
      : 'We\'ll reply within 2 business hours. Or chat on WhatsApp now.',
    sendAnother: lang === 'pt' ? 'Enviar outra mensagem' : 'Send another message',
    whatsappCta: lang === 'pt' ? 'Resposta em minutos no WhatsApp' : 'Minutes away on WhatsApp',
    noSpam: lang === 'pt' ? 'Sem spam. Respondemos em até 2h úteis.' : 'No spam. We reply within 2 business hours.',
    location: lang === 'pt' ? 'Localização' : 'Location',
    hours: lang === 'pt' ? 'Horário' : 'Hours',
    hoursValue: lang === 'pt' ? 'Seg–Sex, 8h às 18h' : 'Mon–Fri, 8am–6pm',
  };

  const INFO = [
    { icon: MapPin, label: labels.location, value: 'Rondonópolis, MT — Brasil' },
    { icon: Clock, label: labels.hours, value: labels.hoursValue },
    { icon: Mail, label: 'E-mail', value: 'contato@nexussolutions.com.br' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+55 (66) 3199-2858' },
  ] as const;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      area: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('sending');

    try {
      await submitLead({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        area: formData.area,
        message: formData.message,
      });

      setStatus('sent');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        area: '',
        message: '',
      });

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }

      // Voltar ao idle após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contato" className="py-28 relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-neon-purple/8 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-semibold uppercase tracking-widest mb-4">
            {labels.contact}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {labels.title.prefix}
            <br />
            <span className="text-neon-purple">{labels.title.highlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact?.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-neon-purple/25 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-neon-purple" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                  <p className="font-semibold text-foreground text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400/50"
              aria-label="Enviar mensagem no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              {labels.whatsappCta}
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-card/60 border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-neon-purple/15 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-neon-purple" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {labels.sent}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  {labels.sentDesc}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-neon-purple hover:underline focus:outline-none focus:ring-2 focus:ring-neon-purple/50 rounded px-2 py-1"
                  aria-label={labels.sendAnother}
                >
                  {labels.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-7 sm:p-9 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 space-y-5"
                aria-busy={status === 'sending'}
              >
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm font-medium">
                      {lang === 'pt' 
                        ? 'Por favor, preencha os campos obrigatórios.' 
                        : 'Please fill in all required fields.'}
                    </p>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium">
                      {t.contact?.name || 'Nome'}
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t.contact?.namePlaceholder}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={status === 'sending'}
                      className="rounded-xl bg-background/60"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-sm font-medium">
                      {t.contact?.company || 'Empresa'}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={t.contact?.companyPlaceholder}
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      className="rounded-xl bg-background/60"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium">
                      {t.contact?.emailLabel || 'Email'}
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.contact?.emailPlaceholder}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={status === 'sending'}
                      className="rounded-xl bg-background/60"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      {t.contact?.phone || 'Telefone'}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder={t.contact?.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={status === 'sending'}
                      className="rounded-xl bg-background/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="area" className="text-sm font-medium">
                    {t.contact?.area || 'Área'}
                  </Label>
                  <Select value={formData.area} onValueChange={handleSelectChange} disabled={status === 'sending'}>
                    <SelectTrigger id="area" className="rounded-xl bg-background/60">
                      <SelectValue placeholder={t.contact?.areaPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {AREAS.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    {t.contact?.message || 'Mensagem'}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.contact?.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    disabled={status === 'sending'}
                    className="rounded-xl bg-background/60 resize-none"
                    aria-required="true"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || !isFormValid}
                  whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 0 28px rgba(168,85,247,0.35)' } : undefined}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : undefined}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1E2E4F] py-4 text-base font-bold text-white shadow-lg transition-all hover:shadow-[0_0_28px_rgba(168,85,247,0.35)] focus:outline-none focus:ring-2 focus:ring-neon-purple/50 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-neon-purple dark:hover:shadow-[0_0_28px_rgba(168,85,247,0.45)]"
                  aria-label={status === 'sending' ? 'Enviando mensagem' : 'Enviar mensagem'}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      <span>{lang === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      {t.contact?.send || 'Enviar'}
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-muted-foreground">
                  {labels.noSpam}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
