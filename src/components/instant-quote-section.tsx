'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator } from 'lucide-react';

const formSchema = z.object({
  calculationMode: z.enum(['sqft', 'rooms']),
  squareFootage: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  otherRooms: z.string().optional(),
  cleaningType: z.enum([
    'standard',
    'deep',
    'postConstruction',
    'commercial',
  ]),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const cleaningTypeMap = {
    'standard': 'Padrão de Luxo',
    'deep': 'Profunda Detalhada',
    'postConstruction': 'Pós-Obra',
    'commercial': 'Comercial Premium'
};

export default function InstantQuoteSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      calculationMode: 'sqft',
      squareFootage: '',
      bedrooms: '1',
      bathrooms: '1',
      otherRooms: '1',
      cleaningType: 'postConstruction',
      additionalNotes: '',
    },
  });

  const calculationMode = form.watch('calculationMode');

  function onSubmit(values: FormValues) {
    const phoneNumber = '5511988259447'; // (11) 98825-9447
    
    const messageParts = ["Olá! Acabei de preencher a calculadora no site:"];

    if (values.calculationMode === 'sqft' && values.squareFootage) {
        messageParts.push(`- Área: ${values.squareFootage} m²`);
    } else if (values.calculationMode === 'rooms') {
        const roomsMessage = [
            values.bedrooms ? `Quartos: ${values.bedrooms}` : '',
            values.bathrooms ? `Banheiros: ${values.bathrooms}` : '',
            values.otherRooms ? `Outros: ${values.otherRooms}` : '',
        ].filter(Boolean).join(', ');
        if(roomsMessage) messageParts.push(`- Cômodos: ${roomsMessage}`);
    }

    messageParts.push(`- Tipo: ${cleaningTypeMap[values.cleaningType]}`);

    if (values.additionalNotes) {
        messageParts.push(`- Detalhes: ${values.additionalNotes}`);
    }

    messageParts.push("\nQual seria o valor aproximado?");

    const message = messageParts.join('\n');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }

  return (
    <section id="quote" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Orçamento Rápido</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
            Simule seu Orçamento Técnico
          </h2>
          <p className="text-lg text-muted-foreground">
            Seja para sua residência ou empresa, descubra o valor do padrão de limpeza técnica Seu Espaço LPO em segundos.
          </p>
          <Card className="max-w-4xl mx-auto border-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-[2.5rem] overflow-hidden">
          <CardHeader className="bg-primary text-white py-4 md:py-6 px-6 md:px-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <CardTitle className="text-xl md:text-2xl font-bold mb-1">Calculadora de Orçamento Técnico</CardTitle>
              <CardDescription className="text-white/60 text-xs md:text-sm">
                Preencha os campos abaixo para orçamentos em minutos
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="p-5 md:p-8 bg-white">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="calculationMode"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-bold text-primary">Como deseja calcular?</FormLabel>
                          <FormControl>
                            <Tabs
                              defaultValue={field.value}
                              onValueChange={field.onChange}
                              className="w-full"
                            >
                              <TabsList className="grid w-full grid-cols-2 h-11 bg-slate-100 p-1 rounded-xl">
                                <TabsTrigger value="sqft" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-semibold text-xs">Área (m²)</TabsTrigger>
                                <TabsTrigger value="rooms" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-semibold text-xs">Cômodos</TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {calculationMode === 'sqft' ? (
                      <FormField
                        control={form.control}
                        name="squareFootage"
                        render={({ field }) => (
                          <FormItem className="animate-in fade-in slide-in-from-top-2 duration-300">
                            <FormLabel className="text-xs font-semibold text-slate-700">Área Aproximada</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Ex: 85" 
                                  {...field} 
                                  className="h-12 rounded-xl border-slate-200 focus:ring-primary focus:border-primary pr-12"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">m²</span>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <FormField
                          control={form.control}
                          name="bedrooms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-slate-700">Quartos</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 rounded-xl border-slate-200 text-xs">
                                    <SelectValue placeholder="-" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {[1, 2, 3, 4, '5+'].map((n) => (
                                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="bathrooms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-slate-700">Banh.</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 rounded-xl border-slate-200 text-xs">
                                    <SelectValue placeholder="-" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {[1, 2, 3, 4, '5+'].map((n) => (
                                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="otherRooms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-semibold text-slate-700">Outros</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 rounded-xl border-slate-200 text-xs">
                                    <SelectValue placeholder="-" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {[0, 1, 2, 3, 4, '5+'].map((n) => (
                                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="cleaningType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-primary">Tipo de Limpeza</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-xl border-slate-200 text-sm">
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-xl">
                              {Object.entries(cleaningTypeMap).map(([key, value]) => (
                                <SelectItem key={key} value={key} className="py-2 text-sm">{value}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold text-slate-700">Obs. (Opcional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ex: Varanda gourmet..."
                              className="min-h-[80px] rounded-xl border-slate-200 resize-none focus:ring-primary focus:border-primary p-3 text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 md:h-16 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-[0_15px_40px_-10px_rgba(15,23,42,0.3)] transition-all active:scale-[0.98] whitespace-normal uppercase tracking-widest"
                >
                  Gerar Orçamento no WhatsApp
                </Button>
                
                <p className="text-center text-[10px] text-muted-foreground">
                  Ao clicar, você será redirecionado para o nosso WhatsApp oficial.
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
}
