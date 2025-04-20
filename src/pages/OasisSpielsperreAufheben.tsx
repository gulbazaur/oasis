import React from 'react';
import SchemaArticle from '../components/SchemaArticle';
import { Unlock } from 'lucide-react';

export default function OasisSpielsperreAufheben() {
  return (
    <article className="max-w-4xl mx-auto">
      <SchemaArticle
        title="OASIS Spielersperre Aufheben - Voraussetzungen und Prozess"
        description="Informationen zur Aufhebung einer OASIS Spielersperre. Erfahren Sie, welche Voraussetzungen erfüllt sein müssen und wie der Prozess abläuft."
        url="https://example.com/oasis-spielersperre-aufheben"
        datePublished="2024-03-14"
        imageUrl="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Unlock size={48} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">OASIS Spielersperre Aufheben</h1>
        <img
          src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Spielersperre aufheben"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-gray-600">
          Die Aufhebung einer OASIS Spielersperre ist unter bestimmten Voraussetzungen möglich. Hier erfahren Sie alles über den Prozess.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Voraussetzungen für die Aufhebung</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Mindestdauer der Sperre ist abgelaufen</li>
          <li>Nachweis über geordnete wirtschaftliche Verhältnisse</li>
          <li>Beratungsgespräch bei einer Suchtberatungsstelle</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Aufhebungsprozess</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <ol className="list-decimal pl-6">
            <li className="mb-3">Schriftlichen Antrag auf Aufhebung stellen</li>
            <li className="mb-3">Erforderliche Nachweise einreichen</li>
            <li className="mb-3">Prüfung durch die zuständige Stelle</li>
            <li>Entscheidung über die Aufhebung</li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Wichtiger Hinweis</h3>
          <p>
            Die Aufhebung einer Spielersperre ist ein sorgfältig geprüfter Prozess zum Schutz der Spieler. Eine vorschnelle Aufhebung soll verhindert werden.
          </p>
        </div>
      </div>
    </article>
  );
}