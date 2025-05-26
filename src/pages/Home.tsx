import React from 'react';
import SchemaArticle from '../components/SchemaArticle';
import { Shield } from 'lucide-react';

export default function Home() {
  return (
    <article className="max-w-4xl mx-auto">
      <SchemaArticle
        title="OASIS Spielersperre - Umfassender Leitfaden zum Spielerschutzsystem"
        description="Erfahren Sie alles über das OASIS Spielersperrsystem in Deutschland. Informationen zur Selbstsperre, Fremdsperre und zum Spielerschutz."
        url="https://example.com"
        datePublished="2024-03-14"
        imageUrl="https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Shield size={48} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">12323131OASIS Spielersperre</h1>
        <img
          src="https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="OASIS Spielerschutz System"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-gray-600">
          OASIS (Overarching Access Self-exclusion Initiative System) ist das zentrale Spielersperrsystem in Deutschland, das Spieler vor den Risiken der Glücksspielsucht schützt.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Was ist OASIS?</h2>
        <p className="mb-4">
          OASIS ist ein bundesweites Sperrsystem, das seit dem 1. Juli 2021 aktiv ist. Es ermöglicht Spielern, sich selbst vom Glücksspiel auszuschließen oder von Dritten sperren zu lassen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Wie funktioniert die Spielersperre?</h2>
        <p className="mb-4">
          Die Spielersperre kann auf zwei Wegen erfolgen:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Selbstsperre: Spieler können sich selbst für mindestens 3 Monate sperren lassen</li>
          <li>Fremdsperre: Angehörige oder Glücksspielanbieter können eine Sperre beantragen</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Vorteile von OASIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Umfassender Schutz</h3>
            <p>Die Sperre gilt für alle angeschlossenen Glücksspielanbieter in Deutschland.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Einfache Handhabung</h3>
            <p>Der Sperrantrag kann online oder vor Ort gestellt werden.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
