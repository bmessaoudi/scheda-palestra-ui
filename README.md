# 💪 Scheda Allenamento - Palestra

Una moderna webapp per la gestione di schede di allenamento personalizzate, sviluppata con Next.js 14, React 18, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia accattivante in dark mode con possibilità di toggle
- **Timer Integrato**: Timer per il recupero tra le serie per ogni esercizio
- **Cardio Timer**: Timer dedicato per la sessione di cardio
- **Layout Responsive**: Ottimizzata per desktop, tablet e mobile
- **TypeScript**: Tipizzazione completa per una migliore esperienza di sviluppo
- **Componenti Modulari**: Architettura component-based con shadcn/ui
- **PWA Ready**: Installabile come Progressive Web App

## 🛠️ Stack Tecnologico

- **Next.js 14**: Framework React con App Router
- **React 18**: Libreria UI con hooks moderni
- **TypeScript**: Tipizzazione statica
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Componenti UI moderni e accessibili
- **Lucide React**: Icone SVG moderne

## 📋 Funzionalità

### Scheda di Allenamento

- **3 giorni di allenamento** (Petto/Spalle/Tricipiti, Schiena/Bicipiti, Gambe/Spalle)
- **1 circuito addominali** con esercizi consecutivi
- **Esercizi basati su scheda reale** con dettagli completi
- **Timer personalizzabile** per il recupero
- **Cardio integrato** con timer di 15 minuti

### Timer Intelligente

- Timer automatico per il recupero tra le serie
- Timer dedicato per la sessione di cardio
- Controlli play/pause/reset
- Barra di progresso visiva
- Notifiche di completamento

### Interfaccia Utente

- Design in dark mode di default
- Toggle per light/dark mode
- Layout responsive con max-width per desktop
- Animazioni fluide
- Icone intuitive

## 🏃‍♂️ Esercizi Inclusi

### Giorno 1 - Petto, Spalle e Tricipiti

- Distensioni manubri orizzontale (4x8)
- Croci orizzontali (3x12)
- Croci cavi chiusura centrale (3x10+10)
- Distensioni panca alta (4x8/10)
- Alzate laterali (3x12)
- Tric french press seduto 1 manubrio (3x10)
- DIP (4xMax)
- Tric pushdown corda (4x10+10)
- Calf (5x30)

### Giorno 2 - Schiena e Bicipiti

- Trazioni presa larga (3xMax)
- Lat machine (4x8)
- Pulley basso presa larga (4x6+6)
- Scrollate manubri (4x15)
- Row insieme (3x10)
- Trazione presa inversa (3xMAX)
- Bic martello (3x8)
- Bic bilanciere angolato (4x10)
- Bic cavo basso asta dritta (3x15)

### Giorno 3 - Gambe e Spalle

- Leg ext (3x10+10)
- Leg press (4x10,10,8,8)
- Bulgarian Squat (3x10)
- Leg curl (4x12)
- Hack squat (3x8)
- Alzate laterali cavo 1braccio (4x10)
- Distensioni manubri seduto (4x10)
- Aperture dietro posteriori manubri (3x12)
- Alzate frontali manubri (4x10+10)

### Circuito Addominali

- **5 circuiti** con:
  - CRUNCH (30SEC)
  - PLANK (30SEC)
  - VACUUM (30SEC)
  - RIPOSO (40SEC)

### Cardio

- **15 minuti** a fine allenamento
- **Pendenza 7** - **Velocità 5**
- **Timer integrato** con controlli completi

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
│   ├── CircuitExerciseCard.tsx
│   ├── CircuitTab.tsx
│   ├── ExerciseCard.tsx
│   ├── ThemeToggle.tsx
│   └── WorkoutTab.tsx
├── data/
│   └── workout-data.ts
├── types/
│   └── workout.ts
└── lib/
    └── utils.ts

public/
├── favicon.svg
├── robots.txt
└── site.webmanifest
```

## 🎨 Componenti Principali

### `ExerciseCard`

- Card per esercizi normali con timer di recupero
- Descrizione sempre visibile
- Timer integrato con controlli

### `CircuitExerciseCard`

- Card speciale per esercizi del circuito
- Design distintivo con bordo giallo
- Timer solo per il recupero tra circuiti

### `WorkoutTab`

- Visualizzazione di un giorno di allenamento
- Header con muscoli target separati
- Layout pulito senza statistiche

### `CircuitTab`

- Visualizzazione del circuito addominali
- Esercizi consecutivi senza recupero
- Timer per il riposo tra circuiti

### `ThemeToggle`

- Toggle per dark/light mode
- Salvataggio preferenze in localStorage
- Posizionamento fisso in alto a destra

## 🎯 Tipi TypeScript

```typescript
interface Exercise {
  id: string;
  name: string;
  sets: number;
  muscleGroups: string[];
  imageUrl?: string;
  videoUrl?: string;
  notes?: string;
}

interface WorkoutExercise extends Exercise {
  reps: string;
  restTime: number;
}

interface CircuitExercise extends Exercise {
  time: number;
}

interface WorkoutDay {
  type: "workout";
  id: string;
  name: string;
  muscleGroups: string[];
  exercises: WorkoutExercise[];
}

interface Circuit {
  type: "circuit";
  id: string;
  name: string;
  muscleGroups: string[];
  exercises: CircuitExercise[];
}
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

- **Desktop**: Layout con max-width per migliore leggibilità
- **Tablet**: Layout adattivo con componenti ridimensionati
- **Mobile**: Layout verticale ottimizzato per touch

## 🔧 Script Disponibili

- `npm run dev`: Avvia il server di sviluppo
- `npm run build`: Build per la produzione
- `npm run start`: Avvia il server di produzione
- `npm run lint`: Esegue il linting del codice

## 📄 Metadata e SEO

- **Title**: "Scheda Allenamento - Palestra"
- **Description**: Completa per SEO
- **Open Graph**: Per condivisione social
- **Twitter Cards**: Per Twitter
- **PWA Manifest**: Per installazione
- **Favicon**: Icona peso/dumbbell
- **Robots.txt**: Per indicizzazione

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
