import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/lib/LanguageContext';
import { toast } from 'sonner';

const areas = [
  'Atendimento 24/7',
  'Qualificação de Leads',
  'Agendamentos & Lembretes',
  'Pedidos & Estoque',
  'Suporte & Status',
  'Cobrança & Boletos',
  'Integrações',
  'Outro',
];

export default function IAContactSection() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    area: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      area: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setSending(true);
    
    // Simula envio (substitua pela sua lógica de API)
    setTimeout(() => {
      setSending(false);
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        area: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contato-ia" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.contactPage.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.contactPage.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: MapPin, label: t.contactPage.locationLabel, value: t.contactPage.location },
              { icon: Clock, label: t.contactPage.hoursLabel, value: t.contactPage.hours },
              { icon: Mail, label: t.contactPage.emailLabel, value: t.contactPage.email },
              { icon: Phone, label: t.contactPage.whatsappLabel, value: t.contactPage.whatsapp },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{label}</p>
                  <p className="font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.name}</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder} 
                    required 
                    className="rounded-xl" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t.contact.company}</Label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.contact.companyPlaceholder} 
                    className="rounded-xl" 
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.emailLabel}</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder} 
                    required 
                    className="rounded-xl" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contact.phone}</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder} 
                    className="rounded-xl" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">{t.contact.area}</Label>
                <Select value={formData.area} onValueChange={handleSelectChange}>
                  <SelectTrigger id="area" className="rounded-xl">
                    <SelectValue placeholder={t.contact.areaPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((a) => (
                      <SelectItem key={a} value={a}>{a}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder} 
                  rows={4} 
                  className="rounded-xl" 
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-full bg-deep-navy dark:bg-neon-purple text-white font-semibold flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 transition-all"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.contact.send}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}