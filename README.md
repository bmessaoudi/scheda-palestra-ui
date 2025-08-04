# 💪 Scheda Palestra UI

Una moderna webapp per la gestione di schede di allenamento, sviluppata con Next.js 14, React 18, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia accattivante in dark mode con possibilità di toggle
- **Timer Integrato**: Timer per il recupero tra le serie per ogni esercizio
- **Progresso in Tempo Reale**: Tracciamento del progresso per serie ed esercizi
- **Responsive**: Ottimizzata per desktop, tablet e mobile
- **TypeScript**: Tipizzazione completa per una migliore esperienza di sviluppo
- **Componenti Modulari**: Architettura component-based con shadcn/ui

## 🛠️ Stack Tecnologico

- **Next.js 14**: Framework React con App Router
- **React 18**: Libreria UI con hooks moderni
- **TypeScript**: Tipizzazione statica
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Componenti UI moderni e accessibili
- **Lucide React**: Icone SVG moderne

## 📋 Funzionalità

### Scheda di Allenamento

- 4 giorni di allenamento (Petto/Tricipiti, Schiena/Bicipiti, Gambe, Spalle/Addominali)
- 18 esercizi totali con dettagli completi
- Timer personalizzabile per il recupero
- Tracciamento del progresso per ogni serie

### Timer Intelligente

- Timer automatico per il recupero tra le serie
- Controlli play/pause/reset
- Barra di progresso visiva
- Notifiche di completamento

### Interfaccia Utente

- Design in dark mode di default
- Toggle per light/dark mode
- Layout responsive
- Animazioni fluide
- Icone intuitive

## 🏃‍♂️ Esercizi Inclusi

### Giorno 1 - Petto e Tricipiti

- Panca Piana (4x8-10)
- Panca Inclinata (3x10-12)
- Dips (3x8-12)
- French Press (3x12-15)

### Giorno 2 - Schiena e Bicipiti

- Stacchi da Terra (4x6-8)
- Trazioni alla Sbarra (4x8-10)
- Rematore con Bilanciere (3x10-12)
- Curl con Bilanciere (3x12-15)
- Curl Martello (3x12-15)

### Giorno 3 - Gambe

- Squat (4x8-10)
- Pressa (3x12-15)
- Affondi (3x10-12 per gamba)
- Leg Extension (3x15-20)
- Calf Raises (4x20-25)

### Giorno 4 - Spalle e Addominali

- Military Press (4x8-10)
- Alzate Laterali (3x12-15)
- Alzate Posteriori (3x12-15)
- Crunch (3x20-25)
- Plank (3x45-60 secondi)

## 🚀 Installazione

1. **Clona il repository**

   ```bash
   git clone <repository-url>
   cd scheda-palestra-ui
   ```

2. **Installa le dipendenze**

   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**

   ```bash
   npm run dev
   ```

4. **Apri nel browser**
   ```
   http://localhost:3000
   ```

## 📁 Struttura del Progetto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Componenti shadcn/ui
│   ├── ExerciseCard.tsx
│   ├── ThemeToggle.tsx
│   └── WorkoutDay.tsx
├── data/
│   └── workout-data.ts
├── types/
│   └── workout.ts
└── lib/
    └── utils.ts
```

## 🎨 Personalizzazione

### Aggiungere Esercizi

Modifica il file `src/data/workout-data.ts` per aggiungere nuovi esercizi o modificare quelli esistenti.

### Aggiungere Media

Per aggiungere immagini o video agli esercizi:

1. Aggiungi i file nella cartella `public/`
2. Aggiorna le proprietà `imageUrl` o `videoUrl` negli esercizi

### Modificare il Design

Il design è completamente personalizzabile tramite Tailwind CSS e le variabili CSS in `src/app/globals.css`.

## 📱 Responsive Design

L'applicazione è ottimizzata per:

- **Desktop**: Layout completo con sidebar e dettagli
- **Tablet**: Layout adattivo con componenti ridimensionati
- **Mobile**: Layout verticale ottimizzato per touch

## 🔧 Script Disponibili

- `npm run dev`: Avvia il server di sviluppo
- `npm run build`: Build per la produzione
- `npm run start`: Avvia il server di produzione
- `npm run lint`: Esegue il linting del codice

## 🤝 Contribuire

1. Fork il progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 🙏 Ringraziamenti

- [shadcn/ui](https://ui.shadcn.com/) per i componenti UI
- [Lucide](https://lucide.dev/) per le icone
- [Tailwind CSS](https://tailwindcss.com/) per il framework CSS
- [Next.js](https://nextjs.org/) per il framework React

---

**💪 Buon allenamento!**
