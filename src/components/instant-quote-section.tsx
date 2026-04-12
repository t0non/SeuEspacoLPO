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
        </div>

        <Card className="max-w-4xl mx-auto border-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden">
          <CardHeader className="bg-primary text-white p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Calculator className="size-6 text-white" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold mb-1">Calculadora de Limpeza</CardTitle>
              <CardDescription className="text-white/60 text-sm">
                Preencha os campos abaixo para começar
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 md:p-10 bg-white">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="calculationMode"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-base font-bold text-primary">Como deseja calcular?</FormLabel>
                          <FormControl>
                            <Tabs
                              defaultValue={field.value}
                              onValueChange={field.onChange}
                              className="w-full"
                            >
                              <TabsList className="grid w-full grid-cols-2 h-14 bg-slate-100 p-1 rounded-2xl">
                                <TabsTrigger value="sqft" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-semibold">Área (m²)</TabsTrigger>
                                <TabsTrigger value="rooms" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm font-semibold">Cômodos</TabsTrigger>
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
                            <FormLabel className="font-semibold text-slate-700">Área Aproximada</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Ex: 85" 
                                  {...field} 
                                  className="h-14 rounded-xl border-slate-200 focus:ring-primary focus:border-primary pr-12 text-lg"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">m²</span>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <FormField
                          control={form.control}
                          name="bedrooms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-slate-700">Quartos</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-xl border-slate-200">
                                    <SelectValue placeholder="Selecione" />
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
                              <FormLabel className="font-semibold text-slate-700">Banheiros</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-xl border-slate-200">
                                    <SelectValue placeholder="Selecione" />
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
                              <FormLabel className="font-semibold text-slate-700">Outros</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-xl border-slate-200">
                                    <SelectValue placeholder="Selecione" />
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

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="cleaningType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-primary">Tipo de Limpeza</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 rounded-xl border-slate-200 text-lg">
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-xl">
                              {Object.entries(cleaningTypeMap).map(([key, value]) => (
                                <SelectItem key={key} value={key} className="py-3">{value}</SelectItem>
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
                          <FormLabel className="font-semibold text-slate-700">Observações (Opcional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ex: Varanda gourmet, áreas externas..."
                              className="min-h-[100px] rounded-xl border-slate-200 resize-none focus:ring-primary focus:border-primary p-4"
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
                  className="w-full h-16 md:h-20 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-xl shadow-[0_15px_40px_-10px_rgba(15,23,42,0.3)] transition-all active:scale-[0.98] whitespace-normal md:whitespace-nowrap px-4 uppercase tracking-widest"
                >
                  Gerar Orçamento no WhatsApp
                </Button>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Ao clicar, você será redirecionado para o nosso WhatsApp oficial.
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
