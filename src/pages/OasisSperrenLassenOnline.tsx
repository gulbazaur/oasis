import React from 'react';
import SchemaArticle from '../components/SchemaArticle';
import { Shield } from 'lucide-react';

export default function OasisSperrenLassenOnline() {
  return (
    <article className="max-w-4xl mx-auto">
      <SchemaArticle
        title="OASIS Sperren Lassen Online - Anleitung zur Selbstsperre"
        description="Erfahren Sie, wie Sie sich online selbst über OASIS sperren lassen können. Schritt-für-Schritt-Anleitung zur Selbstsperre im deutschen Glücksspielmarkt."
        url="https://example.com/oasis-sperren-lassen-online"
        datePublished="2024-03-14"
        imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Shield size={48} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">OASIS Sperren Lassen Online</h1>
        <img
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Online Spielersperre beantragen"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-gray-600">
          Die Online-Selbstsperre über OASIS ist ein einfacher und effektiver Weg, sich selbst vom Glücksspiel auszuschließen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">So funktioniert die Online-Sperre</h2>
        <p className="mb-4">
          Die Beantragung einer Spielersperre über OASIS kann bequem online durchgeführt werden. Hier erfahren Sie, wie Sie vorgehen müssen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Schritt-für-Schritt-Anleitung</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">Persönliche Daten vorbereiten (Personalausweis erforderlich)</li>
          <li className="mb-2">Online-Formular auf der OASIS-Website ausfüllen</li>
          <li className="mb-2">Identitätsnachweis hochladen</li>
          <li className="mb-2">Sperrungsdauer festlegen (mindestens 3 Monate)</li>
          <li>Antrag absenden und Bestätigung abwarten</li>
        </ol>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Wichtige Hinweise</h3>
          <ul className="list-disc pl-6">
            <li>Die Sperre gilt bundesweit für alle angeschlossenen Anbieter</li>
            <li>Eine vorzeitige Aufhebung ist nicht möglich</li>
            <li>Die Sperre wird im zentralen OASIS-System gespeichert</li>
          </ul>
        </div>
      </div>
    </article>
  );
}